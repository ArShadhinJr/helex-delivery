import React, { useEffect, useState } from 'react';
import { Badge, Container, Row } from 'react-bootstrap';
import Carousels from '../Carousel/Carousels';
import Contact from '../Contact/Contact';
import DoctorList from '../DoctorList/DoctorList';
import HappyCustomer from '../HappyCustomer/HappyCustomer';
import Marguee from '../Marquee/Marguee';

function Home() {
    // useState from admition useEffect
    const [ services, setServices ] = useState( [] );
    //  load data frm frist page for home page 
    useEffect( () => {
        fetch( 'http://localhost:5000/services' )
            .then( res => res.json() )
            .then( data => setServices( data ) )
    }, [] );
    return (
        <>
            {/* use marguee  */}
            <Marguee></Marguee>
            {/* use Carousels  */}
            <Carousels></Carousels>
            <Container>
                <h1 className='mt-5 text-uppercase fw-bolder'>we are offering
                    <h5 className="d-inline-block text-uppercase align-text-top"><Badge bg="danger">hot</Badge></h5>
                </h1>
            </Container>
            {/* use Services for home page  */}
            <Row xs={1} md={3} className="g-4 m-5">
                {
                    services.map( service => <DoctorList
                        key={services._id}
                        service={service}
                    ></DoctorList> )
                }

            </Row>
            <Contact></Contact>
            <Container>
                <h1 className='mt-5 text-uppercase fw-bolder'>happy customer reviwe
                    <h5 className="d-inline-block text-uppercase align-text-top"><Badge bg="danger">new</Badge></h5>
                </h1>
            </Container>
            <HappyCustomer></HappyCustomer>
        </>
    )
}

export default Home
