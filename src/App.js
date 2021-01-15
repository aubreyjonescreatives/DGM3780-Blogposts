import React from 'react'
import './App.css';
import IntroBlogPost from './IntroBlogPost'
import TopNavigation from './TopNavigation'
import HeroImage from './HeroImage'

function App() {
  return (
    <div className="App">
    <TopNavigation/>
    <HeroImage/>
    <IntroBlogPost/>
    </div>
  );
}

export default App;
