import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const OrderPlace = () => {
    const { user } = useAuth();
    return (
        <div className="text-center my-5">
            <h2>Your Order Placed.</h2>
            <h4>Thank You. <b className="text-warning">{user.displayName}</b></h4>
            <h4>Check Your Email: <br /> <h5><b className="text-decoration-underline text-primary ">{user.email}</b></h5> </h4>
            <Link className="text-warning text-decoration-none fs-1" to="/home">HELEx DELIVERY</Link>
        </div>
    );
};

export default OrderPlace;