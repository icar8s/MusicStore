import React from 'react';
import './home.scss';
import french from "../../assets/images/sliderHome/french.png"


export const Home: () => JSX.Element = () => {
    return (
        <div className="home">
            <div className="slider">
                <div className="slider-content-wrapper">
                    {/* Текстовая часть */}
                    <div className="slider-content">
                        <h1 className="slider-title">Winter Offer 2024 Collection in Music Store</h1>
                        <p className="slider-description">
                            Random text Shop Now debil ya random ne hochu text pisat lorem lorelay uefi hot Nastya Kringe
                        </p>
                        <button className="slider-button">Shop Now</button>
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
    route: 'home',
    roles: ['admin', 'moderator'],
};