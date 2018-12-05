import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(),
      title: '',
      body: '',
      done: false
    };
    
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateTitle(event) {
    this.setState({title: event.currentTarget.value});

  }
  
  updateBody(event) {
    this.setState({body: event.currentTarget.value});

  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({title: ""});
    this.setState({body: ""});

  }
  
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Title
            <input onChange = {this.updateTitle} type="text" value={this.state.title}/>
          </label>
          <label>Body
            <input onChange = {this.updateBody} type="text" value={this.state.body}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;
