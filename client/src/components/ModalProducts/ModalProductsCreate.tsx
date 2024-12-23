import "./modal.scss"; // Стили для модального окна

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your email" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your message" rows={4} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};