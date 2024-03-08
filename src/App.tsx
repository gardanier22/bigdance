import React from 'react';
import './App.css';
import teams from './CollegeBasketballTeams.json';

const ballTeams = teams.teams;

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
        <h4>School: {team.school}</h4>
        <h5>Mascot: {team.name}</h5>
        <h5>
          Location: {team.city}, {team.state}
        </h5>
      </div>
    );
  }
}

function Teams() {
  return (
    <div>
      {ballTeams.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1>Lets Go To The Ball!!!</h1>
      <h2>
        Below we have all the information about the teams competeing at the Big
        Dance!
      </h2>
      <h2>
        Don't wanna spoil the ending but you already know the Montana Grizzlies
        are taking that chip!!!
      </h2>
      <h3>#UpWithMontanaBoys</h3>
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
