import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post( 'http://localhost:5000/services', data )
            .then( res => {
                if ( res.data.insertedId ) {
                    alert( 'added successfully' );
                    reset();
                }
            } )
    }

    return (
        <Container className="py-5">
            <h2 className="text-center text-warning pb-4 ">Please Add a Service</h2>
            <Form onSubmit={handleSubmit( onSubmit )}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register( "nameClass", { required: true, maxLength: 20 } )} placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Details</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={3} {...register( "details" )} placeholder="Details" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Price
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" {...register( "fee" )} placeholder="price" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register( "img" )} placeholder="image url" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Address
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" {...register( "position" )} placeholder="Time" />
                    </Col>
                </Form.Group>
                <ButtonGroup className="mb-2 text-center">
                    <Button type="submit" className="btn btn-warning">Add a Service</Button>
                </ButtonGroup>
            </Form>
        </Container>
    );
};

export default AddServices;