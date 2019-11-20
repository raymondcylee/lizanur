import React from 'react';
import { Route } from 'react-router-dom'
import Books from './pages/Books.js'
import AboutMe from './pages/AboutMe.js'


export default class App extends React.Component {



  render() {

    return (
      <>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/books" component={Books} />
      </>
    )
  }

}
