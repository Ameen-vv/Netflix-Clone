import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {originals,trending,action,romance} from './urls'
function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost title='Trending' url={trending}/>
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Romance' isSmall url={romance}/>
      <RowPost title='Originals' isSmall url={originals}/>
    </div>
  );
}

export default App;
