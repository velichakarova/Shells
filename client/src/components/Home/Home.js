import image from "../../images/ohtilly-H-i1oc7eMhg-unsplash.jpg";
import * as ReactBootStrap from "react-bootstrap";

const Home = () => {
  return (
    <ReactBootStrap.Container >
      <img src={image} alt="" hight="120%vh" width="120%vw"/>
    </ReactBootStrap.Container>
  );
};


export default Home;