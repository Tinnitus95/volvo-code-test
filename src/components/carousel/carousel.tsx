import React, {useEffect, useState} from 'react';
import PaginationButtonGroup from './pagination-button-group';
import StepIndicator from './step-indicator';

interface CarouselProps {
    show: number;
    children: React.ReactNode[]
}

const Carousel = (props: CarouselProps) => {
    const {children, show} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);


    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    };
    const handleTouchStart = (e: TouchEvent) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e: TouchEvent) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* @ts-ignore */}
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className={`carousel-content show-${show}`}
                         style={{transform: `translateX(-${currentIndex * 100 / show}%)`}}>
                        {children}
                    </div>
                </div>
            </div>
            {show > 1 ? (<PaginationButtonGroup next={next} prev={prev}/>) :
                (<StepIndicator childrenLength={length} currentIndex={currentIndex}/>)}

        </div>
    );
};


export default Carousel;
