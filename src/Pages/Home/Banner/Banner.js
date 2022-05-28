import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Banner.css';
import './animation-slider.css';
import banner1 from '../../../Images/banner/banner-1.jpg';
import banner2 from '../../../Images/banner/banner-2.jpg';
import banner3 from '../../../Images/banner/banner-3.jpg';

const Banner = () => {
    const content = [
        {
            title: "New Items Arrived",
            description:
                "New products has been arrived. Stocks are limited",
            image: "https://i.ibb.co/NT0GwV3/banner-2.jpg"



        },
        {
            title: "Quality products",
            description:
                "We don't compromise with quality",
            image: "https://i.ibb.co/rck53dV/banner-1.jpg",

        },
        {
            title: "Quality services",
            description:
                "We provide services after sell",
            image: "https://i.ibb.co/mb6DbGf/banner-3.jpg",
        }
    ];
    return (
        <div>
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;