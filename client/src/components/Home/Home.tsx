import React from 'react';
import './home.scss';


export const Home: () => JSX.Element = () => {
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
                        <button className="slider-button">Shop Now</button>
                    </div>

                    {/* Изображение */}
                    <div className="slider-image">
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