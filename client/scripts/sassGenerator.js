import path from 'path';
import { fileURLToPath } from 'url';
import { exporter as sassExport } from 'sass-export';
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.resolve(__dirname, '../src/layout/_themes');

function getScssFilesInVariablesSync(dirPath) {
    const result = {};

    try {
        const directories = fs.readdirSync(dirPath, { withFileTypes: true });

        directories.forEach((dir) => {
            if (dir.isDirectory()) {
                const subDirPath = path.join(dirPath, dir.name);

                const variablesPath = path.join(subDirPath, 'variables');
                const scssFiles = [];

                if (fs.existsSync(variablesPath)) {
                    const filesInVariables = fs.readdirSync(variablesPath, { withFileTypes: true });
                    filesInVariables.forEach((file) => {
                        const filePath = path.join(variablesPath, file.name);
                        if (file.isFile() && filePath.endsWith('.scss')) {
                            scssFiles.push(filePath);
                        }
                    });
                }

                if (scssFiles.length > 0) {
                    result[dir.name] = scssFiles;
                }
            }
        });
    } catch (err) {
        console.error('Ошибка при чтении директории:', err);
    }

    return result;
}

function createVariableFileFromPaths(filePaths, targetDir) {
    let variablesContent = `/*File generated automatically*/\n/*Do not modify*/\n\n\n`;

    filePaths.forEach((filePath) => {
        const fileName = path.basename(filePath, '.scss');
        const relativeFilePath = path.relative(targetDir, filePath).replace(/\\/g, '/');
        variablesContent += `@use "${relativeFilePath}" as ${fileName};\n`;
        variablesContent += `@forward "${relativeFilePath}";\n\n`;
    });

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const outputFile = path.join(targetDir, 'variables.scss');
    fs.writeFileSync(outputFile, variablesContent, 'utf-8');
}

function createMapFileFromPaths(filePaths, targetDir) {

    let mapsContent = `/*File generated automatically*/\n/*Do not modify*/\n\n\n`;

    mapsContent += "@use \"variables\";\n" +
        "@forward \"variables\";\n\n";

    for (const filePath of filePaths) {
        if (!fs.existsSync(filePath)) {
            console.error(`SCSS файл не найден: ${filePath}`);
            continue;
        }
        const fileNameWithoutExt = path.basename(filePath, path.extname(filePath));

        const options = {
            inputFiles: [filePath],
            includePaths: [`${path.resolve(filePath, '../')}`],
            outputStyle: 'compressed',
        };

        const sassExporter = sassExport(options);
        const array = sassExporter.getArray()
        const mappedVars = array.map(x=>({
            property: x.name.replace(`\$${fileNameWithoutExt}-`, ""),
            value: `variables.${x.name}`
        }))

        mapsContent += `\$${fileNameWithoutExt}: (\n`;

        mappedVars.forEach((mappedVar) => {
            mapsContent += `        ${mappedVar.property}:  ${mappedVar.value},\n`;
        })


        mapsContent += ");\n\n";

    }

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const outputFile = path.join(targetDir, 'maps.scss');
    fs.writeFileSync(outputFile, mapsContent, 'utf-8');
}

function createDefineFileFromPaths(theme, filePaths, targetDir) {
    let definesContent = `/*File generated automatically*/\n/*Do not modify*/\n\n\n`;

    definesContent += "@use \"maps\";\n\n"

    definesContent += `\$${theme}-theme: (\n`;

    for (const filePath of filePaths) {
        const fileNameWithoutExt = path.basename(filePath, path.extname(filePath));
        definesContent += `        ${fileNameWithoutExt}: maps.\$${fileNameWithoutExt},\n`
    }

    definesContent += ");";

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const outputFile = path.join(targetDir, 'define.scss');
    fs.writeFileSync(outputFile, definesContent, 'utf-8');
}

const groupedScssFiles = getScssFilesInVariablesSync(directoryPath);

Object.keys(groupedScssFiles).forEach(key => {
    const targetDir = path.resolve(groupedScssFiles[key][0], '../..');

    createVariableFileFromPaths(groupedScssFiles[key], targetDir);

    createMapFileFromPaths(groupedScssFiles[key], targetDir);

    createDefineFileFromPaths(key, groupedScssFiles[key], targetDir);
})