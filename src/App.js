import React, { useState } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tab, Tabs } from 'react-bootstrap';
import ModalFindBy from './components/ModalFindBy';
import PersonalSuggest from './components/PersonalSuggest';
import CardRecipe from './components/CardRecipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserRouter
} from "react-router-dom";
import Home from './pages/Home';

/****************************/
import AddMealForm from "./components/AddMealForm";
import { useCallback } from "react";
import { v4 } from 'uuid';
import DetailMeal from "./components/DetailMeal" 
/****************************/
function App() {
  
  return (
    <>
      <Router>
        <div className='App'>
          <Route path='/' exact component={Home}/>
        </div>
      </Router>
      <AddMealForm  />
      <DetailMeal/>
    </>
    
  );
}

export default App;
