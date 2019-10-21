import React from 'react';
import {UserDetailsProvider} from './util/UserDetailsProvider'
import MainPage from './components/MainPage';
import MenuBar from './components/MenuBar';

const App = () => {
  return (
    <div className="App">
      <UserDetailsProvider>
        <MenuBar />
        <MainPage />
      </UserDetailsProvider>
      
    </div>
  );
};

export default App;