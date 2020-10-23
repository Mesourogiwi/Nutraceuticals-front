import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import api from '../Api';


export class Success extends Component {

    //tables
    constructor(props) {
        super(props);
        this.state = {
          products: [],
          topics_id: [],
          topics_value: [],
          use_id: [],
          use_value: []
        }
      }

    

      async componentDidMount(){
        var { values } = this.props;
        if(values.topicR[0] != null){
            console.log(values.topicR[0])
            console.log(values.useR[1])
            for(let i = 0; i<values.topicR.length; i++) {
                this.state.topics_id[i] = values.topicR[i][i].id_topic;
                this.state.topics_value[i] = values.topicR[i][i].topic;
            }
            for(let i = 1; i<values.useR.length; i++) {
                this.state.use_id[i-1] = values.useR[i][i-1].id_use;
                this.state.use_value[i-1] = values.useR[i][i-1].use;
            }
            console.log(this.state.topics_id)
            console.log(this.state.use_id)
        // valorr = values.topicR[1]
        // valorr.forEach(function(valorr) {
            
        //     console.log(valorr.id_use);
            
        // });
        
        }
        try {
          await api.post("/profinal/filter", {
            uses: this.state.use_id,
            topics: this.state.topics_id
          }).then(response=>{
            this.setState({ products: response.data});
            console.log(response.data);
          })
        }catch(error) {
          console.log(error);
          alert("Erro ao carregar os dados!")
        }
      };


    //tables

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const products = this.state.products.map(product => {
            return (
            <tr>
              <td>{product.Product.id_prod}</td>
              <td>{product.Product.product}</td>
            </tr>
          )});
      
        return (
            <div>
                <h1 className="mb-5">Result</h1>
                <div className="Tables">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {products}
          </tbody>
        </Table>
      </div>
                <button className="btn btn-danger" onClick={this.back}>Back</button>
        
    </div>

        )
    }
}

export default Success
