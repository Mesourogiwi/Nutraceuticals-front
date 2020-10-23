import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import api from '../Api';

export class Uses extends Component {
    
    //multiselect
    state = {
        uses: [],
        usee: [],
        valor: [],
        aux: []
      }
    
     
    
    
      constructor() {
        super();
        this.multiselectRef = React.createRef();
        //this.onSelect = this.onSelect.bind(this);
      }
    
      async componentDidMount() {
        const { values } = this.props;
        if(values.useR[1]!=null){
            this.state.aux = values.userR;
        }
        const response = await api.get('uses');
        this.setState({ uses: response.data });
      }
      //multiselect functions
      onRemove(selectedList) {
        console.log(selectedList)  
      }
    
      resetValues() {
        // By calling the belowe method will reset the selected values programatically
        this.multiselectRef.current.resetSelectedValues();
      }
    
      getValues() {
        this.multiselectRef.current.getSelectedItems();
      }
    
      onSelect = (selectedItem) => {
        //console.log(selectedItem)
       // this.setState({usee: [...this.state.usee, selectedItem]});
       //this.state.usee.push(selectedItem)
        //console.log(this.state.usee[0]);
        const { useChange } = this.props;
        useChange(selectedItem);
      }

    //multiselect

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
                <h1 className="mb-5">What benefits are you looking for?</h1>

                <div className="form-group">
                    <Row className="justify-content-md-center">
                        <Card style={{ width: "300px", textAlign: "center" }}>
                            <Card.Body>
                                <Card.Title>Uses</Card.Title>
                                <Multiselect selectedValues={this.state.aux} options={this.state.uses} getValues={this.getValues} onSelect={this.onSelect} onRemove={this.onRemove} displayValue="use" ref={this.multiselectRef} />
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

export default Uses
