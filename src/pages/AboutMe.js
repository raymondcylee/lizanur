import React from 'react';
import Profile from '../components/Profile.js'
import NewBookModal from '../components/NewBookModal.js'



export default class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <>
        {/* <NewBookModal /> */}
        <Profile />
      </>
    )
  }
}
