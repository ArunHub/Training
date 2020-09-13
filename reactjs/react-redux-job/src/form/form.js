import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props);
    console.log('form props',props)
    this.state = {
      name: '',
      nameList: [],
      errors: {}
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    console.log('nextprops',nextProps)
  }

  componentWillReceiveProps(recProps) {
    console.log('recProps',recProps)
  }

  handleInput(event) {
    // console.log(event.target.value)
    let val = event.target.value;
    let errors = {};
    if (val.match(/^[a-zA-Z]+$/g)) {
      console.log('ddd')
      errors['name'] = '';
      this.setState({
        name: val,
        errors: errors
      });
    }
    else {
      errors['name'] = 'only letters';
      this.setState({
        errors: errors
      });      
    }  
    
  }

  handleSubmit(event) { 
    event.preventDefault();
    if (this.state.nameList.indexOf(this.state.name)>0) {
      return false;
    }else {
      this.setState(()=>{
        this.state.nameList.push(this.state.name);
      })
    }
    let formObj = {
      name: this.state.name,
      id: this.props.job.id,
      jobname: this.props.job.name
    }
    this.props.onsubmit(formObj);
    // this.props.history.push('/applied-jobs');        
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name: <input value={this.state.name} onChange={this.handleInput}/>
          <input type="submit" value="submit" />
          {(this.state.name.length>0)?<span>{this.state.errors['name']}</span>:null}
        </form>
      </div>
    )
  }
}

export default Form;