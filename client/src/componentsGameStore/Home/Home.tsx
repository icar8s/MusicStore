import './home.scss';
import video from "../../assets/images/sliderHome/why-hyperpc-alt-2.mp4"
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {NavLink} from "react-router-dom";
import {ProductsGameStore} from "../Products/Products.tsx";

export const HomeGameStore: ComponentWithMeta  = ()  => {
    return (
        <div className="home">
            <div className="slider">
                <div className="slider-content-wrapper">
                    {/* Текстовая часть */}
                    <div className="slider-content">
                        <h1 className="slider-title">Winter Offer 2024 Collection in Game Store</h1>
                        <p className="slider-description">
                            The Winter Offer 2024 Collection at our Game Store is here!
                            Discover an exclusive range of PC components, gaming accessories, and hardware designed to take your gaming setup to the next level this winter.
                            From high-performance GPUs, CPUs, and motherboards to premium gaming chairs, keyboards, and monitors, we’ve got everything you need for the ultimate gaming experience at unbeatable prices.
                            Enjoy special discounts, limited-edition products, and bundled deals available only this season. Whether you're a hardcore gamer or building your first gaming rig, this collection is perfect for every level of gamer.
                            Don’t miss out—visit our store or shop online to upgrade your gaming gear today. Winter 2024 is your time to dominate the game!
                        </p>
                        <button className="slider-button">
                            <NavLink
                                className={`slider-button`}
                                to={ProductsGameStore.meta.route}>

                                Shop Now
                            </NavLink>

                        </button>
                    </div>

                    {/* Видео */}
                    <div className="slider-video">
                        <video autoPlay loop muted playsInline>
                            <source src={video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

HomeGameStore.meta = {
    route: '',
    roles: ['admin', 'moderator'],
};