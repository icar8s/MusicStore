import {exporter} from "sass-export";

const generateSCSSMap = () => {
    try {
        const options = {
            inputFiles: ["src/layout/_themes/basic/variables/select.scss"]
        };
        const exportData = exporter(options);
        const asObject = exportData.getStructured();
        const asArray = exportData.getArray();

        console.log(asObject.variables);
        console.log(asArray)
    } catch (error) {
        console.error('Ошибка при генерации SCSS-мапы:', error);
    }
};

generateSCSSMap();