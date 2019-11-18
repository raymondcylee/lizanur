import React from 'react';
import '../App.css';
import Profile from '../components/Profile.js'



export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <>
        <Profile />
      </>
    )
  }
}
