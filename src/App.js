import React from 'react';
import './App.css';

import Card from './components/card/card';
import calculator from './images/icon-calculator.svg';

function App() {
  return (
    <div className="App">
        <Card title="This is a title" image={calculator}>
          This is a paragraph
        </Card>
    </div>
  );
}

export default App;
