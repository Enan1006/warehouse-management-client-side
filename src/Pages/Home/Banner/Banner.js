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
            title: "Solution to any Law related problem",
            description:
                "We are here to solve any kind of problem you are facing in your life",
            image: "https://i.ibb.co/NT0GwV3/banner-2.jpg"



        },
        {
            title: "Top lawyer farm around the world",
            description:
                "I have been practicing law since early 2000s. Manage thousands of cases. My success ratio is 90 percent",
            image: "https://i.ibb.co/rck53dV/banner-1.jpg",

        },
        {
            title: "Modern problem, modern solution",
            description:
                "Modern problem requires modern solution.",
            button: "Buy now",
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