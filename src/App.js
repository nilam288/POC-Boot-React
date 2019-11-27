import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Addproject from './components/projects/Addproject';
import Updateproject from './components/projects/updateProject';
import Dashboard from './components/Dashboard';
import Header from './layout/Header';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
<div>
  <Header/>
  <Route path="/dashboard" component={Dashboard}/>
  <Route path="/addproject" component={Addproject}/>
  <Route path="/updateproject/:id" component={Updateproject}/>
</div>
    </Router>
    </Provider>
  );
}

export default App;

