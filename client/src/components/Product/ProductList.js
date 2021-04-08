/* eslint-disable no-useless-constructor */

import getAll from '../services/postService.js'
import Main from './Main'
import {Component} from 'react';

class ProductListComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            products:[]
        }
    }
    componentDidMount(){
        getAll()
        .then(products =>{
            this.setState({products})
        })
    }


render(){
    return(
        <Main products={this.state.products} />
    )
}
}

export default ProductListComponent;