import './assets/css/paper-kit.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import MainPage from 'components/Actual/MainPage';
import PredictWrapper from 'components/Actual/PredictWrapper';

export default function App() {
  return (
  <BrowserRouter style={{backgroundColor: "#343a40"}}>
    <Switch>
      <Route path="/predict">
        <PredictWrapper/>
      </Route>
      <Route path="/">
        <MainPage/>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
