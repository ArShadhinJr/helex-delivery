import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DoctorList = ( props ) => {
    // destructuring for doctor 
    const { nameClass, img, fee, position, _id, details } = props.service;

    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-center">
                        <Card.Title className="text-warning"><h2>{nameClass}</h2></Card.Title>
                        <Card.Text><b>{position}</b></Card.Text>
                        <Card.Text>Fee: <b>{fee}</b></Card.Text>
                        <p className="fs-5 bg-gray border border-4 rounded"> {details}. Good services. Allah bless you. Good wishes for you. <br /></p>
                        <Link to={`/offer/${_id}`}><p className="text-center"><Button variant="warning">Book {nameClass}</Button></p></Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default DoctorList;