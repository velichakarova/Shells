import * as ReactBootStrap from "react-bootstrap";

const Login = () => {
  return (
    <ReactBootStrap.Form className="w-25 p-3 ">
      <ReactBootStrap.Form.Group controlId="formBasicEmail">
        <ReactBootStrap.Form.Label>Username</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="email" placeholder="Username" />
        <ReactBootStrap.Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </ReactBootStrap.Form.Text>
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Form.Group controlId="formBasicPassword">
        <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="password" placeholder="Password" />
      </ReactBootStrap.Form.Group>

      <ReactBootStrap.Button variant="primary" type="submit">
        Submit
      </ReactBootStrap.Button>
    </ReactBootStrap.Form>
  );
};
export default Login;
