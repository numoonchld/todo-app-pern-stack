import React, { Fragment } from 'react'
import './App.css';
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'
import { Box } from '@material-ui/core'

function App() {
  return <Fragment>
    <Box display="flex" flexDirection="column" alignItems="center">
      <InputTodo />
      <ListTodo />
    </Box>
  </Fragment>
}

export default App;
