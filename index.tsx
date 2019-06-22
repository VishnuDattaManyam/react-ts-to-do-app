import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Header } from './components/header/header';
import { ToDo } from './components/to-do/to-do'
import { Footer } from './components/footer/footer';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ToDo />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
