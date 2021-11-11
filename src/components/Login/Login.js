import Button from '@restart/ui/esm/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuthentication();


const Login = () => {
    // use auth 
    const { signInUsingGoogle, handleLogIn, handleEmailChange, handlePasswordChange, error } = useAuth();

    // use location and history 
    const location = useLocation();
    const history = useHistory();


    const redirect_uri = location.state?.from || '/home';

    //. use handle google login system 
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then( result => {
                history.push( redirect_uri );
            } )
    }

    return (
        <><Row className="justify-content-md-center my-4 mx-0">
            <Col xs="10" md="4" className="border border-4 border-warning rounded-3">
                <h1 className="text-center text- m-3">Pleace Login</h1>
                <Form className="p-3" onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <h6>Not registered? <Link to="/singup">Create Account.</Link>
                        </h6>
                    </Form.Group>
                    <div className="row mb-3 text-danger">{error}</div>
                    <div className="d-grid">
                        <Button className="btn btn-outline-warning" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>

                <div className="my-3 text-center">
                    or login with
                </div>
                <div className="d-grid mb-3">
                    <Button onClick={handleGoogleLogin} className="btn btn-warning" type="submit">
                        Google
                    </Button>
                </div>
            </Col>
        </Row></>
    );
};

export default Login;