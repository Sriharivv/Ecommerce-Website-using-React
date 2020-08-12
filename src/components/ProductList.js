import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import {Typography,Container} from  '@material-ui/core';
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>

    <Container maxWidth="100px">

    <Typography component="div" style={{ background: "lightgrey",height:'100vh',overflow:"hidden"}}>
              <ProductConsumer>
                {value => {

                    return <Product key={value.products.id} product={value.products}/>;

                }}
              </ProductConsumer>

         </Typography>
       </Container>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
