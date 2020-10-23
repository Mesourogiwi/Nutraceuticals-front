import React, { Component, useState } from 'react'
import Ddown from "./Ddown"
import {Card, Row} from 'react-bootstrap';


export class Products extends Component {

  

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        //const decoratedOnClick = useAccordionToggle(eventKey, onClick);

        

        
        return (
            <div className="form-container">
                <h1 className="mb-5">Choose the products you want</h1>

                <div className="form-group">


 <Row className="justify-content-md-center">
  <Card style={{ width: "300px", textAlign: "center"}}>
    <Card.Body>
      <Card.Title>Products</Card.Title>
      <Ddown/>
    </Card.Body>
  </Card>
  </Row>




                </div>



                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Products