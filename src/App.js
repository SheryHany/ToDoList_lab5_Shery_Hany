import React from 'react';
import './App.css';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//components
import Add from './components/add-box/Add';
import List from './components/tasks-list/List';
import Completed from './components/completed/Completed';
import Deleted from './components/deleted/Deleted';

const App = () => (
  <>
    <Add />
    <List />
    <Completed />
    <Deleted />
  </>
)

export default App;
