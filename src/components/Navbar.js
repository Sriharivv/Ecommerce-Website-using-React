import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Navbar,Nav,NavItem,Button,Container,Row,Col,Dropdown} from "react-bootstrap";
import ReactSearchBox from "react-search-box";
import {detailProduct,storeProducts} from "../data";
import { ProductConsumer } from "../context";
import "../App.css";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Navbar1 extends Component {
  render() {
    return (
      <ProductConsumer>
        {value=>{
          const {bool}=value;
          const {signup}=value;
          return(
          <Navbar  className="Col"  expand="lg">
            <Container>
              <Row>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                   <Col className="Fnt1" >
                   BuyAPhone
                   </Col>
                  </Link>
              </Row>
              <Row className="SearchBar" >
                  <input type="text" placeholder="" expandable="true" />
              </Row>
              <Row>
                   {bool?
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                          <Col className="Fnt4" >
                              Login
                           </Col>
                      </Link>
                            :
                      <Link  style={{ textDecoration: 'none' }}>
                          <Col className="Fnt4" onClick={value.showModal} style={{ textDecoration: 'none' }}>
                            Log Out
                          </Col>
                      </Link>
                    }
                </Row>
            </Container>
          </Navbar>
          )
        }}
      </ProductConsumer>
              );
            }
          }
