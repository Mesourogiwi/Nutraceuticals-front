import React from 'react';
import api from '../Api';
import { Multiselect } from 'multiselect-react-dropdown';



export default class TopicList extends React.Component {

  state = {
    topics: []
  }

  async componentDidMount() {
    const resp = await api.get('topics');
    this.setState({ topics: resp.data });
  }


  onSelect(selectedList) {
    console.log(selectedList)
  }

  onRemove(selectedList) {
    console.log(selectedList)
  }

  constructor() {
    super();
    this.multiselectRef = React.createRef();
  };

  getValues1() {
    // By calling the belowe method will reset the selected values programatically
    this.multiselectRef.UsesList.getSelectedItems();
  }

  render(props) {


    return (

      <div>
        <Multiselect options={this.state.topics} onSelect={this.onSelect} onRemove={this.onRemove} displayValue="topic" ref={this.multiselectRef} />
      </div>
    )
  }
}

