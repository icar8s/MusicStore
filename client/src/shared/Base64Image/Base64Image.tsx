import {HTMLAttributes} from "react";

interface IBase64Image extends Omit<HTMLAttributes<HTMLImageElement>, "alt" | "src"> {
    base64String: string;
}

export const Base64Image = ( {base64String, ...props}: IBase64Image) => {
    return (
        <img
            {...props}
            src={`data:image/png;base64,${base64String}`}
            alt="Base64Image"
        />
    );
};