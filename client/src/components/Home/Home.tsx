import React from 'react';
import './home.scss';


export const Home: () => JSX.Element = () => {
    return (
        <div className="home">
            <div className="slider">
                <div className="slider-content-wrapper">
                    {/* Текстовая часть */}
                    <div className="slider-content">
                        <h1 className="slider-title">Winter Offer 2024 Collection in Gamer Store</h1>
                        <p className="slider-description">
                            Зимняя коллекция предложений 2024 года в нашем магазине компьютеров уже в продаже!
                            Откройте для себя эксклюзивную линейку ПК, ноутбуков и комплектующих, созданных для работы и развлечений в зимний сезон.
                            Мы предлагаем мощные устройства для игр, офисной работы, а также для творчества с уникальными скидками и ограниченными предложениями.
                            В нашем ассортименте есть все — от мощных процессоров и видеокарт до аксессуаров и периферийных устройств.
                            Не упустите шанс обновить свою технику по выгодной цене!
                            Заходите в наш магазин или покупайте онлайн, чтобы воспользоваться зимними предложениями 2024 года.
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