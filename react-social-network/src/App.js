import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Nav />

        {/* <Profile /> */}

        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs store={props.store} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profile={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
