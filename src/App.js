import React, { Component } from 'react';
import './App.scss';
import Tabs from './demo/tabs/index'
// import Upload from './demo/qiniuUpload/index'
import Ceiling from './demo/ceiling/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs/>
      </div>
    );
  }
}

export default App;
