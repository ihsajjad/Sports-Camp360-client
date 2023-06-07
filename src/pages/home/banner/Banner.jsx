import { useEffect, useState } from "react";

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliders = [
        {
            img: "https://images.unsplash.com/photo-1659468551117-8255d708e197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        {
            img: "https://images.unsplash.com/photo-1629219644109-b4df0ab25a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1661414964871-cc623f793e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        }
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the current index
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
        }, 3000);

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
        };
    }, [sliders]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider h-[90vh] w-full relative rounded">
            <img src={sliders[currentIndex].img} alt="Slider Image" className="h-full w-full rounded" />
            <div className="circle-buttons space-x-2 absolute left-2/4 bottom-6">
                {
                    sliders.map((image, index) => (
                        <button
                            key={index}
                            className={`slider-btn ${index === currentIndex ? 'active-slider' : 'inactive-slider'}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))
                }
            </div>
        </div>
    );
};

export default Banner;