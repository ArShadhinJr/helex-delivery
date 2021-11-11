import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    // use State to set services 
    const [ success, setSuccess ] = useState( [] );
    //  Load Services data from services json file 
    useEffect( () => {
        fetch( 'https://arshadhinjr.github.io/jsonapi/covid.json' )
            .then( res => res.json() )
            .then( data => setSuccess( data ) )
    }, [] );
    return (
        <>
            {/* Services Section main slogan  */}
            <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
                <h1 className="fs-1 text-warning">COVID AWARENESS</h1>
                <p>HELEX DELIVERY / COVID AWARENESS</p>
            </div>
            <Row xs={1} md={3} className="g-4 m-5  p-5">
                {/* map for show services  */}
                {
                    success.map( covid => <Col>
                        <Card>
                            <Card.Img variant="top" src={covid.img} />
                            <Card.Body>
                                <Card.Title><h2 className="text-danger">{covid.heading}</h2></Card.Title>
                                <Card.Text className="text-justify ">{covid.details}</Card.Text>
                                <p className="text-center"><Button variant="warning">Continue...</Button></p>
                            </Card.Body>
                        </Card>
                    </Col> )
                }

            </Row>
        </>
    );
};

export default Services;