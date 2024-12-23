import "./productModal.scss";
import {ModalTitle} from "../../../misc/providers/ModalProvider.tsx";
import {ImagePicker} from "../../../shared/imagePicker/ImagePicker.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {MusicProduct} from "../../../models/dtos/musicStore/musicProduct.ts";
import {MusicProductDetail} from "../../../models/dtos/musicStore/musicProductDetail.ts";
import {
    definedMusicProductKeys,
    musicProductType,
    MusicProductType
} from "../../../models/dtos/enums/musicProductType.ts";
import {SelectOption} from "../../../shared/option/SelectOption.tsx";
import {Select} from "../../../shared/select/Select.tsx";
import {Input} from "../../../shared/input/Input.tsx";
import {Button} from "../../../shared/button/Button.tsx";

export interface IProductModal {
    product?: MusicProductDetail
}

export const ProductModal = ({product}: IProductModal) => {

    const isEdit = product !== undefined;

    const [productState, setProductState] = useState<MusicProduct>(
        product
            ? {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                base64Image: product.base64Image,
                description: product.description,
                percentage: product.sale?.percentage ?? 0,
                type: product.type
            }
            : {
                id: '',
                name: '',
                price: 0,
                quantity: 0,
                base64Image: '',
                description: '',
                percentage: 0,
                type: MusicProductType.Guitar
            }
    );

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setProductState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setProductState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <ModalTitle title={isEdit? "Product Edit": "Product Create"}/>
                <ImagePicker setImageBase64Image={(base64Image) => setProductState((prev) => ({ ...prev, base64Image }))}/>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Product Name</label>
                    <Input
                        type="text"
                        id="name"
                        value={productState.name}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                    />

                    <label htmlFor="price">Price</label>
                    <Input
                        type="number"
                        id="price"
                        value={productState.price}
                        onChange={handleInputChange}
                        placeholder="Enter price"
                    />

                    <label htmlFor="quantity">Quantity</label>
                    <Input
                        type="number"
                        id="quantity"
                        value={productState.quantity}
                        onChange={handleInputChange}
                        placeholder="Enter quantity"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={productState.description}
                        onChange={handleTextareaChange}
                        placeholder="Enter product description"
                        rows={4}
                    />

                    <label htmlFor="percentage">Discount Percentage</label>
                    <Input
                        type="number"
                        id="percentage"
                        value={productState.percentage}
                        onChange={handleInputChange}
                        placeholder="Enter discount percentage"
                    />

                    <label htmlFor="type">Product Type</label>
                    <Select
                        onClick={(e)=> {
                            const productType = e.currentTarget.value as musicProductType;
                            setProductState((prev) => ({ ...prev, type: MusicProductType[productType] }));
                        }}
                        defaultValue={productState.type}>
                        {definedMusicProductKeys.map(type =>
                            <SelectOption
                                key={type}
                                value={type}>
                                {type}
                            </SelectOption>
                        )}
                    </Select>

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};