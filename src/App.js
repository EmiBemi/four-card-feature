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
        <Card title="Supervisor" image={supervisor} color="cyan">
          Monitors activity to identify project roadblocks
        </Card>
        <Card title="Team Builder" image={teamBuilder} color="red">
          Scans our talent network to create the optimal team for your projects
        </Card>
        <Card title="Karma" image={karma} color="yellow">
          Regularly evaluates our talent to ensure quality
        </Card>
        <Card title="Calculator" image={calculator} color="blue">
          Uses data from past projects to provide better delivery estimates
        </Card>
    </div>
  );
}

export default App;
