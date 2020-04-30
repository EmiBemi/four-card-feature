import React from 'react';
import './App.css';

import Card from './components/card/card';
import calculator from './images/icon-calculator.svg';
import teamBuilder from './images/icon-team-builder.svg';
import karma from './images/icon-karma.svg';
import supervisor from './images/icon-supervisor.svg';

function App() {
  return (
    <div className="App">
      <div className="header">
        <p id="header-title">Reliabe, efficient delivery</p>
        <p id="header-title-bold">Powered by Technology</p>
        <p id="header-subtitle">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </div>
      <div className="card-container">
        <div className="column">
          <Card title="Supervisor" image={supervisor} color="cyan">
            Monitors activity to identify project roadblocks
          </Card>
        </div>
        <div className="column">
          <Card title="Team Builder" image={teamBuilder} color="red">
            Scans our talent network to create the optimal team for your projects
          </Card>
          <Card title="Karma" image={karma} color="yellow">
            Regularly evaluates our talent to ensure quality
          </Card>
        </div>
        <div className="column">
          <Card title="Calculator" image={calculator} color="blue">
            Uses data from past projects to provide better delivery estimates
          </Card>
        </div>
      </div> 
    </div>
  );
}

export default App;
