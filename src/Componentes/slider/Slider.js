import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

function CarouselComponent() {
    const [slides] = useState([
        {
            text: 'Aprende a invertir en los mercados financieros con nuestros cursos de trading online.',
        }, {
            text: 'Te enseñaremos las estrategias, técnicas y herramientas que usan los profesionales.',
        }, {
            text: '¿Quieres convertirte en un trader exitoso? Descubre nuestros cursos de trading',
        }, {
            text: 'Donde aprenderás desde lo básico hasta lo avanzado, con ejemplos prácticos y reales.',
        }, {
            text: 'No importa tu nivel de experiencia, tenemos el curso ideal para ti.',
        }, {
            text: 'Podrás dominar el arte de la inversión criptomonedas y otros mercados.',
        }, {
            text: 'Aprenderás a analizar, operar y gestionar tu capital de forma eficiente y rentable.',
        }
    ]);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleNext = (eventKey) => {
        setActiveSlide(eventKey);
    };

    const handlePrev = (eventKey) => {
        setActiveSlide(eventKey);
    };

    return (
        <Carousel
            activeIndex={activeSlide}
            onSelect={handleNext}
            onSlide={handlePrev}
            controls={false}
        >
            {slides.map((slide, index) => (
                <CarouselItem key={index}>
                    <div className="carousel-text">
                        {slide.text}
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;
