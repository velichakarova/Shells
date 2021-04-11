/* eslint-disable no-useless-constructor */

import getAll from './services.js/productService'
import Main from './Main'
import {Component} from 'react';
import UserContext from '../../Context'

class ProductListComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            products:[]
        }
    }
    
    static contextType= UserContext

    componentDidMount(){
        getAll()
        .then(products =>{
            this.setState({products})
        })
    }


render(){
    console.log(`tukkkk`);
    console.log(this.context);
    return(
        <Main products={this.state.products} />
    )
}
}

export default ProductListComponent;