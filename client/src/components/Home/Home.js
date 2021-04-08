import image from "../../images/ohtilly-H-i1oc7eMhg-unsplash.jpg";
import * as ReactBootStrap from "react-bootstrap";

const Home = () => {
  return (
    <ReactBootStrap.Container >
      <img src={image} alt="" width="100%"/>
    </ReactBootStrap.Container>
  );
};


export default Home;