import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./DoctorDetails.css";

const DoctorDetails = () => {
    //useauth , use params , usestate 
    const { user } = useAuth();
    const { offerId } = useParams();
    const [ offers, setOffers ] = useState( [] );

    // distructuring for doctor 
    const { img, nameClass, fee, details, position } = offers;

    //use effect load indivitual data 
    useEffect( () => {
        fetch( `http://localhost:5000/services/${offerId}` )
            .then( res => res.json() )
            .then( data => setOffers( data ) )
    }, [] );

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        // data.email = `${user.email}`;
        // data.status = "pending";
        // data.img = { img },

        axios.post( 'http://localhost:5000/confirmOrder', data )
            .then( res => {
                if ( res.data.insertedId ) {
                    alert( 'order placed successfully' );
                    reset();
                }
            } )
    };

    return (

        <>
            <Container>

                <Col xm={12}>
                    <div className="fw-bolder text-center p-5 m-5">
                        <h1 className="fs-1 text-warning">OUR OFFERS DETAIL</h1>
                        <p>HELEX DELIVERY  / CONFIRM YOUR ORDER</p>
                    </div>
                </Col>

                {user.email ?
                    <Row className="mb-5">
                        <Col xm={12} md={5}>
                            <Image src={img} border="warning" rounded fluid />
                        </Col>
                        <Col xm={12} md={7} className="px-5">
                            <h2>
                                We are offering: <b>{nameClass}</b>
                            </h2>
                            <h3>
                                Total Cost: <b>$ {fee}</b>
                            </h3>
                            <h3>
                                Delivery Time: <b>Maximum- {position}</b>
                            </h3>
                            <h4>
                                Details: {details}
                            </h4>

                            <Link to="/home" className=" text-decoration-none"><h4 className="my-3 text-center text-warning" >HELEX DELIVERY</h4></Link>


                            <Form onSubmit={handleSubmit( onSubmit )}>

                                <Form.Group as={Row} className="mb-3 d-none">
                                    <Form.Label column sm="2">
                                        Image
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "img" )} type="text" value={img} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">
                                        Product
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "productName" )}
                                            type="text" value={nameClass} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">
                                        Price
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "fee" )}
                                            value={fee} type="number" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">
                                        Date
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "date" )} type="date" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">
                                        Email
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "email" )} type="email" value={user.email} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">
                                        Phone
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "phone", { required: true } )}
                                            type="phone" placeholder="Phone Number" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">
                                        Address
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control {...register( "add", { required: true } )}
                                            type="text" placeholder="Address" />
                                    </Col>
                                </Form.Group>

                                {errors.exampleRequired && <span>This field is required</span>}

                                <ButtonGroup className="mb-2 text-center">
                                    {/* <Link to="/orderplace"></Link> */}
                                    <Button type="submit" className="btn btn-warning">Place Order</Button>
                                    <Button className="btn btn-danger">Cencel</Button>
                                </ButtonGroup>
                            </Form>




                        </Col>
                    </Row> :

                    <div >
                        <h2 className="text-warning text-center">Please <Link to="/login">Login</Link> or <Link to="/singup">Sing Up</Link></h2>
                    </div>
                }
            </Container>
        </>
    );
};

export default DoctorDetails;