import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './modules/routes'
import TopBar from './modules/components/topBar'
import { CurrentUserProvider } from './modules/contexts/currentUser'
import CurrentUserChecker from './modules/components/currentUserChecker'

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
