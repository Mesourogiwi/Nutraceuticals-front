import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import api from '../Api';

export class Topics extends Component {
    //multiselect
    state = {
        topics: [],
        topicss: [],
        valor_id: [],
        valor_value: [],
        aux_t:[],
    }



    //   async componentDidMount() {
    //     const response = await api.get('topics');
    //     this.setState({ topics: response.data });
    //   }


    async componentDidMount() {
        const { values } = this.props;
        if(values.useR[1] != null){
        //console.log(values.useR[1][0]);
        for(let i = 1; i<values.useR.length; i++) {
            this.state.valor_id[i-1] = values.useR[i][i-1].id_use;
            this.state.valor_value[i-1] = values.useR[i][i-1].use;
        }
    // console.log(this.state.valor_id);
        // valorr.forEach(function(valorr) {
            
        //     console.log(valorr.id_use);
            
        // });
        
        }
        //  this.setState({valor: values.useR})
        // this.state.valor = values.useR[1].id_use;
        //console.log(this.state.valor);
        // console.log(values.useR[0]);

        try {
            await api.post('profinal', {
                uses : this.state.valor_id
              
            }).then(response => {
                this.setState({ topics: response.data });

                for (let i = 0; i < response.data.length; i++) {
                     //console.log(response.data[i]);
                     this.state.aux_t.push(response.data[i].Topic)
                 }
                //console.log(this.state.aux_t)
                  
            });
        } catch (error) {
            //console.log(error);
            
        }
    }
    //.Topic.topic

    //   async componentDidMount(){
    //     try {
    //       await api.post("/profinal/filter", {
    //         uses: 1,
    //         topics: 6
    //       }).then(response=>{
    //         this.setState({ products: response.data});
    //         console.log(response.data);
    //       })
    //     }catch(error) {
    //       console.log(error);
    //       alert("Erro ao carregar os dados!")
    //     }
    //   };

    //multiselect functions
    onRemove(selectedList) {
        //console.log(selectedList)
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
        const { topicChange } = this.props;
        topicChange(selectedItem);
        // this.setState({usee: [...this.state.usee, selectedItem]});
        // this.state.topicss.push(selectedItem)
        // console.log(this.state.topicss[0]);

        //    const {values} = this.props;
        // this.valor = values.useR
        // this.state.valor.push(selectedItem)
        // values.topicR = this.valor
        // console.log (values.topicR)

        // const { topicChange } = this.props;
        // topicChange(selectedItem);
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
                                <Card.Title>Topics</Card.Title>
                                <Multiselect options={this.state.aux_t} displayValue="topic" onSelect={this.onSelect} />
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

export default Topics

