import './home.scss';
import french from "../../assets/images/sliderHome/french.png"
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {NavLink} from "react-router-dom";
import {Products} from "../Products/Products.tsx";


export const Home: ComponentWithMeta  = ()  => {
    return (
        <div className="home">
            <div className="slider">
                <div className="slider-content-wrapper">
                    {/* Текстовая часть */}
                    <div className="slider-content">
                        <h1 className="slider-title">Winter Offer 2024 Collection in Music Store</h1>
                        <p className="slider-description">
                            The Winter Offer 2024 Collection at our Music Store is here!
                            Discover an exclusive range of musical instruments, accessories, and gear tailored to elevate your sound this winter.
                            From guitars, keyboards, and drums to premium headphones and studio equipment,
                            we’ve got everything you need at unbeatable prices. Enjoy special discounts, limited-edition products,
                            and bundled deals available only this season. Whether you're a seasoned pro or just starting out,
                            this collection is perfect for every musician. Don’t miss out—visit our store or shop online to take advantage of these incredible offers.
                            Winter 2024 is your time to shine musically!
                        </p>
                        <button className="slider-button">
                            <NavLink
                                className={`nav-link`}
                                to={Products.meta.route}>

                                Shop Now
                            </NavLink>
                        </button>

                    </div>

                    {/* Изображение */}
                    <div className="slider-image">
                        <img src={french} alt="Music Store" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.meta = {
    route: '',
    roles: ['admin', 'moderator'],
};