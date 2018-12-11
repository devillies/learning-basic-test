import React, {Component} from 'react';
import ImageFrame from './components/ImageFrame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ImageFrame
            imageUri="https://pbs.twimg.com/profile_images/696865259395518464/fzciGXBl_400x400.png"
            title="KodeFox"
          />
        </header>
      </div>
    );
  }
}

export default App;
