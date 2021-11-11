import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    // use State to set orders 
    const [ orders, setOrders ] = useState( [] );
    const { user } = useAuth();

    const [ control, setControl ] = useState( false );

    useEffect( () => {
        fetch( `http://localhost:5000/myOrders/${user.email}` )
            .then( res => res.json() )
            .then( data => setOrders( data ) )
    }, [ control ] );

    const handleDelete = ( id ) => {
        fetch( `http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
        } )
            .then( ( res ) => res.json() )
            .then( ( data ) => {
                if ( data.deletedCount ) {
                    setControl( !control );
                }
            } );
        console.log( id );
    };

    return (
        <>
            {/* orders Section main slogan  */}
            <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
                <h1 className="fs-1 text-warning">MY OREDERS</h1>
                <p>HELEX DELIVERY / MANAGE YOUR ALL ORDERS</p>
                <br /><br />
                <h4>Your Total Order: {orders.length}</h4>

            </div>

            <Row xs={1} md={3} className="g-4 m-5  p-5">
                {/* map for show orders  */}
                {
                    orders.map( order => <><Col>
                        <Card className="bg-gray">
                            <Card.Img variant="top" src={order.img} />
                            <Card.Body>
                                <Card.Title><h3 className="text-warning text-center">{order.productName}</h3></Card.Title>
                                <Card.Text className="text-center ">Cost: {order.fee}</Card.Text>
                                <p className="text-center"><Button className="btn btn-danger" onClick={() => handleDelete( order._id )}>Cencle</Button></p>
                            </Card.Body>
                        </Card>
                    </Col></> )
                }

            </Row>
        </>
    );
};

export default MyOrders;