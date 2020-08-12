import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import {faAngleDoubleRight,faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Logout from "./Logout";


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
          <ProductConsumer>
            {value => {
              const {bool}=value;
              return (
            <React.Fragment>

            <div className="cards-slider-wrapper1"  >

                  {value.products.map(product=>(
                  <div>
                  {bool?
                  <React.Fragment>

                   <Link to="/login">
                     <div>
                      <img src={product.img} onClick={() => value.handleDetail(product.id)}/>
                     </div>
                    </Link>
                    <div  className="title">
                     {product.title}
                     </div>
                     <div  className="price ">
                      ${product.price}
                      </div>
                    </React.Fragment>
                    :
                    <React.Fragment>

                     <Link to="/details">
                       <div>
                        <img src={product.img} onClick={() => value.handleDetail(product.id)}/>
                       </div>
                      </Link>
                      <div  className="title">
                       {product.title}
                       </div>
                       <div  className="price ">
                        ${product.price}
                        </div>

                      </React.Fragment>
                    }


                  </div>))}

            </div>
            <Hoverbuton className="next" onClick={value.scroll.bind(null,1)} >
              <FontAwesomeIcon icon={faAngleDoubleRight} size="3x" style={{color:"black"}} className="icon1"/>
             </Hoverbuton>
             <Hoverbuton className="prev" onClick={value.scroll.bind(null,-1)} >
               <FontAwesomeIcon icon={faAngleDoubleLeft} size="3x" style={{color:"black"}} className="icon1"/>
             </Hoverbuton>
           <Logout/>
            </React.Fragment>
            );
            }}
          </ProductConsumer>
    );
  }
}



const Hoverbuton = styled.button`
width:50px;
padding:3em 0em
border-radius: 4px;
border:none;
background-color:white;
outline:none;
opacity:.3;
:hover{
  background-color:white;
  opacity:5;
  border:none;
	cursor: pointer;
}`
