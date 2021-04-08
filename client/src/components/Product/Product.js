import * as ReactBootStrap from "react-bootstrap";

const Product = ({
    model,
    imgURL,
    description,
    price,

})=>{
    return(
        <ReactBootStrap.Card style={{ width: '18rem' }}>
        <ReactBootStrap.Card.Img variant="top" src={imgURL} />
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>{model}</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
            {description}
            {price}
          </ReactBootStrap.Card.Text>
          <ReactBootStrap.Button variant="primary">Buy</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
    )

}
export default Product;