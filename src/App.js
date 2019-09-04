import React, { Component } from 'react';
import ChatInput from './components/ChatInput';
import ChatHistory from './components/ChatHistory';

class App extends Component {

  state = {
    isLoading: true,
    db:{},
    history: []
  }

  constructor() {
    super();
  }

  componentDidMount() {
    fetch('data/db.json')
      .then(response => response.json())
      .then(data => this.setState({ db: data, isLoading: false }));
  }

  sendMessage = (message) => {
    // console.log('sendMessage', message);
    let desc = ''
    let safe = true
    let checkData = this.state.db[message.replace(/\s/g, '').toUpperCase()]

    if(typeof checkData === 'string') {
      safe = false;
      desc = checkData
    }

    this.state.history.unshift({
        license: message,
        desc,
        safe,
        ts: new Date().valueOf()
      })
    this.setState({ 
      history: this.state.history
    });
  }

  render() {
    const { sendMessage, state } = this;
    return (
      <div className="App">
        <ChatInput sendMessage={ sendMessage } isLoading={ state.isLoading }/>
        <ChatHistory history={ state.history } />
      </div>
    );
  }
}

export default App;
