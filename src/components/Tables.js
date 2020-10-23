import React from 'react';
import { Table } from 'react-bootstrap';
import api from '../Api';


export default class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      topic: [],
      use: []
    }
  }

  // state = {
  //   valor: []
  //  }

  // async componentDidMount(){
  //   const response = await api.get('topics');
  //   this.setState({ topics: response.data});
  //   console.log(this.state.topics) 
  //     }

  // axios({
  //   method: 'post'
  // })

  async componentDidMount(){
    const { values } = this.props;
    if(values.topicR[0] != null){
    var valorr =[]
    valorr = values.topicR[1]
    valorr.forEach(function(valorr) {
        
        console.log(valorr.id_use);
        
    });
    
    }


    try {
      await api.post("/profinal/filter", {
        uses: 1,
        topics: 6
      }).then(response=>{
        this.setState({ products: response.data});
        console.log(response.data);
      })
    }catch(error) {
      console.log(error);
      alert("Erro ao carregar os dados!")
    }
  };


  render() {
    const products = this.state.products.map(product => {
      return (
      <tr>
        <td>{product.Product.id_prod}</td>
        <td>{product.Product.product}</td>
        <td>6</td>
        <td>1</td>
      </tr>
    )});

    return (
      <div className="Tables">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Topic</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            {products}
          </tbody>
        </Table>
      </div>

    )
  }
}



