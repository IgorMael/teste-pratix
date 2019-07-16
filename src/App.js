import React from 'react';
import Servicos from './containers/Services';
import Header from './components/header/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Servicos />
      </div>
    );
  }
}

export default App;
