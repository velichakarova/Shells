// import * as ReactBootStrap from "react-bootstrap";
import Product from './Product';


const Main = ({
    products
})=>{

    return(
        // <ReactBootStrap.Container>
        <div>
       <h1>Mobile for Everyone</h1>
    
           
        {products.map(x=>
            <Product
                key={x._id}
                model={x.model}
                imgURL={x.imgURL}
                description={x.description}
                price={x.price}
            />
        )}
     
        </div>
    //    </ReactBootStrap.Container>
    )

        }
export default Main;