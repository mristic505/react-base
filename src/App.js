import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.updateDownloadCounter = this.updateDownloadCounter.bind(this);
    this.submitNewTitle = this.submitNewTitle.bind(this);
    this.state = {
      title: 'Custom app',
      subtitle: 'Made up on the fly',
      downloads: 0
    }
  }

  updateDownloadCounter(){
    this.setState((prevState) => {
      return {
        downloads: prevState.downloads + 1
      }
    });
    console.log(this.state.downloads);

  }

  submitNewTitle(e){
    e.preventDefault();
    const newTitle = e.target.elements.newTitle.value.trim();
    this.setState(() => {
      return {
        title: newTitle
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Component1 
          title={this.state.title} 
          subtitle={this.state.subtitle} />
        <Component2 
          downloadCounter={this.state.downloads}
          updateDownloadCounter={this.updateDownloadCounter} />
        <Component3 
          submitNewTitle={this.submitNewTitle}/>
      </div>
    );
  }
}


class Component1 extends Component {
  render() {
    return ( 
      <div>
        <h1>{this.props.title}</h1> 
        <h3>-- {this.props.subtitle} --</h3>
      </div>
    )
  }
}

class Component2 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateDownloadCounter}>Download</button>
        <p>Number of downloads: {this.props.downloadCounter}</p>
      </div>
    )
  }
}

class Component3 extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submitNewTitle}>
          <label>
            Change Title<br/>
            <input type="text" name="newTitle" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


/*******************************************/
              export default App;
/*******************************************/