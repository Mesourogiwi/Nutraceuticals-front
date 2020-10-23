import React from 'react';
import api from '../../Api';
import { Multiselect } from 'multiselect-react-dropdown';

export default class UsesList extends React.Component {

  state = {
    uses: [],
    usee: []
  }

  constructor() {
    super();
    this.multiselectRef = React.createRef();
    //this.onSelect = this.onSelect.bind(this);
  }

  async componentDidMount() {
    const response = await api.get('uses');
    this.setState({ uses: response.data });
  }

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
   this.state.usee.push(selectedItem)
    console.log(this.state.usee[0]);
  }

  //this.state.usee[0]

  render() {
    return (
      <div>
        <Multiselect options={this.state.uses} getValues={this.getValues} onSelect={this.onSelect} onRemove={this.onRemove} displayValue="use" ref={this.multiselectRef} />  
      </div>
    )
  }
}