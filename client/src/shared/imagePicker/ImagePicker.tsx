import {ChangeEvent, DragEvent, useState} from "react";

export interface IImagePicker {
    setImageBase64Image: (imageBase64: string) => void;
}

export const ImagePicker = ({setImageBase64Image}: IImagePicker) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const reader = new FileReader();


    reader.onload = () => {
        if (reader.result) {
            const base64 = reader.result.toString();
            setImageBase64Image(base64.substring(base64.indexOf(",") + 1)); // Set the Base64 image
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);

            reader.readAsDataURL(file)
        }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);

            reader.readAsDataURL(file)
        }
    };


    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return <div>
        <input
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{display: 'none'}}
            id="image-picker"
        />
        <label htmlFor="image-picker" style={{cursor: 'pointer'}}>
            <div
                style={{
                    width: 200,
                    height: 200,
                    border: '2px dashed gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                }}>
                {selectedImage ? (
                    <img
                        src={selectedImage}
                        alt="Selected"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 10,
                        }}
                    />
                ) : (
                    <span>Select an Image</span>
                )}
            </div>
        </label>
    </div>
}