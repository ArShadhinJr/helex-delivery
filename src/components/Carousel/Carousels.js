import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
    // set carouseles for useEffect
    const [ carouseles, setCarouseles ] = useState( [] );
    // load data from carousels.json file 
    useEffect( () => {
        fetch( 'http://localhost:5000/carusel' )
            .then( res => res.json() )
            .then( data => setCarouseles( data ) )
    }, [] );


    return (
        <Carousel variant="light">
            {/* carousele map */}
            {
                carouseles.map( carousele => <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousele.imgLink}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-warning fw-bolder">{carousele.imgSlug}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            }
        </Carousel>
    );
};

export default Carousels;