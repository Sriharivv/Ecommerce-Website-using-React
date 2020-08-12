import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {detailProduct,storeProducts} from "../data";
import { ProductConsumer } from "../context";
import "../App.css";
import {Navbar,Nav,NavItem,Button,Container,Row,Col,Dropdown} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Logout extends Component {
  render() {
    return (
      <ProductConsumer>
        {value=>{
          const {show}=value;
          if (!show) {
            return null;
          } else {
            return (
            <React.Fragment>
              <ModalContainer onClick={value.hideModal}/>
               <Modal>
                 <Row className="element">
                 Wanna log out?
                  </Row>
                  <Row className="cancelbutton">
                  <Col>

                  <button className="logoutbutton1" onClick={value.hideModal}>
                   Cancel
                  </button>

                  </Col>
                  <Col>
                   <Link to="/" style={{color:"black"}}>
                  <button className="logoutbutton1" onClick={()=>{value.hideModal() ;value.toggle()}}>
                   Log out
                  </button>
                   </Link>
                  </Col>
                   </Row>
              </Modal>
            </React.Fragment>

          );
        }
        }}
      </ProductConsumer>
    );
  }
}
      const ModalContainer = styled.div`
        position: fixed;
        background: black;
        width: 100%;
        height: 100%;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      const Modal = styled.div`
        position: fixed;
        background: black;
        width: 25%;
        height: 40%;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
