import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Header } from './cmps/Header';
import { Favorites } from './pages/Favorites';
import { WeatherApp } from './pages/WeatherApp';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route path="/" component={WeatherApp} />
      </Switch>
    </Router>
  );
}

export default App;
