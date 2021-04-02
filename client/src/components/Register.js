import * as ReactBootStrap from "react-bootstrap";

const Register = () => {
  return (
    <ReactBootStrap.Form>
      <ReactBootStrap.Form.Group controlId="formBasicEmail">
        <ReactBootStrap.Form.Label>Username</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="email" placeholder="Username" />
        <ReactBootStrap.Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </ReactBootStrap.Form.Text>
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Form.Group controlId="formBasicPassword">
        <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="password" placeholder="Enter your password..." />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Form.Group controlId="formBasicPassword">
        <ReactBootStrap.Form.Label>Confirm Password</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="password" placeholder="Enter your password again..." />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Button variant="primary" type="submit">
        Submit
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
  );
};
export default Register;
