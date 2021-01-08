import corgi from './assets/imgs/corgi.jpg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  componentDidMount() {
    this.handleInit();
    document.addEventListener("scroll", this.handleLazyLoading)
  }

  handleInit = e => {
    const main = document.querySelector("main");
    for (let i = 0; i < 10; i++) {
      let img = document.createElement("img");
      img.src = corgi;
      img.alt = "Corgi";
      main.appendChild(img);
    }
  }

  handleLazyLoading = e => {
    const scroll = e.target.scrollingElement;
    const main = document.querySelector("main");

    // Check if it has reached the bottom of the page
    // if it has reached the bottom of page, then load more images
    if (scroll.scrollHeight <= scroll.scrollTop + scroll.clientHeight) {
      for (let i = 0; i < 20; i++) {
          let img = document.createElement("img");
          img.src = corgi;
          img.alt = "Corgi";
          main.appendChild(img);
      }
    }
  }

  render() {
    return (
      <main>
      </main>
    );
  }
}

export default App;
