import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

const teamsList = teams.teams;

interface NcaamTeams {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<NcaamTeams> {
  render() {
    const team = this.props;
    return (
      <div>
        <h3>School: {team.school}</h3>
        <h4>Mascot: {team.name}</h4>
        <h4>
          Location: {team.city}, {team.state}
        </h4>
      </div>
    );
  }
}

function Teams() {
  return (
    <div>
      {teamsList.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1>Lets Go Dancing!!!</h1>
      <h2>
        Below we have all the information about the teams competeing at the ball
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Teams />
    </div>
  );
}

export default App;
