import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../card/whychooseusCard/TestimonialCard";
import testimonials from "../data/whychooseus/data"; 
import "./cardslider.css"

const TextSlider2 = () => {
    const settings = {
           
        infinite: true, // Infinite loop sliding
        speed: 500, // Transition speed in ms
        slidesToShow: 3, // Number of slides visible at a time
        slidesToScroll: 1, // Number of slides to scroll per navigation
        autoplay: true, // Enables automatic sliding
        autoplaySpeed: 1500, // Time interval for automatic sliding (in ms)
        rtl: true, // Ensures the sliding direction is to the right
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };


return (
<div className="image-slider-container2">
       
        <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          title={testimonial.title}
          description={testimonial.description}
        />
      ))}
        </Slider>
    </div>
);
}

export default TextSlider2
