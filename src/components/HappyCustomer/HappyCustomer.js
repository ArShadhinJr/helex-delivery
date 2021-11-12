import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HappyCustomer = () => {
    // use State to set services 
    const [ customers, setCustomers ] = useState( [] );
    //  Load Services data from services json file 
    useEffect( () => {
        fetch( 'https://quiet-crag-51319.herokuapp.com/customer' )
            .then( res => res.json() )
            .then( data => setCustomers( data ) )
    }, [] );


    return (
        <Row xs={1} md={3} className="g-4 m-5 mt-0  p-5 pt-3">
            {/* map for show services  */}
            {
                customers.map( customer => <><Col>
                    <Card>
                        <Card.Img variant="top" src={customer.img} />
                        <Card.Body>
                            <Card.Title><h2 className="text-danger">{customer.name}</h2></Card.Title>
                            <h3><Card.Text className="text-justify ">{customer.add}</Card.Text></h3>
                            <Card.Text className="text-justify ">Mr/Ms, {customer.name} says: <b>{customer.rev}</b></Card.Text>
                            <p className="text-center"><Button className="btn btn-warning" variant="warning">Call {customer.name}</Button></p>
                        </Card.Body>
                    </Card>
                </Col></> )
            }

        </Row>
    );
};

export default HappyCustomer;