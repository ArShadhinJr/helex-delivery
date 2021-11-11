import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        // footer hear
        <div className="bg-dark py-3 m-0 d-md-flex ">
            <Col xm={0} md={2} ></Col>
            <Col xm={12} md={5} className="m-0 py-3 text-white">
                {/* footer dialog */}
                <h5 className="mb-2">Copyright &copy; 2002-2021 HELEX DELIVERY</h5>
                <h5>Home</h5>
                <h5>About</h5>
                <h5>Govt. web</h5>
                <h5>CEO About</h5>
            </Col>
            {/* available payment getway  */}
            <Col xm={12} md={5} className="m-0 py-3">
                <Image src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" />
            </Col>

        </div>

    );
};

export default Footer;