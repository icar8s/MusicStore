import "./newsModal.scss";
import {ModalTitle} from "../../../misc/providers/modalProvider.tsx";
import {ImagePicker} from "../../../shared/imagePicker/ImagePicker.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {Input} from "../../../shared/input/Input.tsx";
import {Button} from "../../../shared/button/Button.tsx";
import {$api} from "../../../api";
import {useApi} from "../../../misc/hooks/useApi.tsx";
import {useIdentityStore} from "../../../stores/identity/useIdentityStore.ts";
import {News} from "../../../models/dtos/general/news.ts";


export const NewsModal = () => {

    const {token} = useIdentityStore()
    const [newsState, setNewsState] = useState<News>({
                name: '',
                base64Image: '',
                description: '',
            }
    );

    const {reFetch: send} = useApi({method: $api.general.news.create, params: [newsState, token], auto: false})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setNewsState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setNewsState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        send()
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <ModalTitle title={"News Create"}/>
                <ImagePicker setImageBase64Image={(base64Image) => setNewsState((prev) => ({ ...prev, base64Image }))}/>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">News Name</label>
                    <Input
                        type="text"
                        id="name"
                        value={newsState.name}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                    />


                    <label htmlFor="description">NewsDescription</label>
                    <textarea
                        id="description"
                        value={newsState.description}
                        onChange={handleTextareaChange}
                        placeholder="Enter product description"
                        rows={4}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};