import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";


export default class Login extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return(
      <div className="detailcolor1" >
        <Container >
      <form className="form1">
        <label className="label3" >Enter Id
       <input type="text"  name="firstname" placeholder="" />
       </label>
        <label className="label3" >
        Password
        <input type="password"  name="password" placeholder="" className="passwordf"/>
         </label>
        <Link to="/">
        <button type="submit" className="submitb" onClick={value.toggle}>
          Login
        </button>
        </Link>
       </form>
        </Container>
        </div>
          )
        }}
      </ProductConsumer>
    )
  }
  }
  const Container = styled.div`
    position:fixed;
    top: 20%;
    left: 35%;
    right: 42%;
    bottom: 30%;
    background: white;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid grey;
  `;
