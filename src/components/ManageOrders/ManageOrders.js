import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [ orders, setOrders ] = useState( [] );
    const [ control, setControl ] = useState( false );

    useEffect( () => {
        fetch( `http://localhost:5000/allOrders` )
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
                <h1 className="fs-1 text-warning">MANAGE ALL SERVICES</h1>
                <p>HELEX DELIVERY / MANAGE ALL ORDERS</p>
                <br /><br />

            </div>

            <div>
                <div className="container">
                    <h1>Manage Services </h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Service Title</th>
                                <th>Email</th>
                                <th>Image Link</th>
                                <th>Fee</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map( ( pd, index ) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{pd.productName}</td>
                                    <td>{pd.email}</td>
                                    <td>{pd.image}</td>
                                    <td>{pd.fee}</td>
                                    <button onClick={() => handleDelete( pd._id )} className="btn bg-danger p-2">Delete</button>
                                </tr>
                            </tbody>
                        ) )}
                    </Table>
                </div>
            </div>
        </>
    );
};

export default ManageOrders;