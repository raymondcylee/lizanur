import React from 'react';
import '../scss/Navbar.scss'
import { Navbar, NavbarBrand } from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default class Navibar extends React.Component {

  render() {
    return (
      <>
        <Navbar dark>
          <NavbarBrand className="navbar-brand" href="/">Liza Nur</NavbarBrand>
          <div className="icons">
          <a href="https://www.facebook.com/liza.razali"><FontAwesomeIcon className="eachIcon" id="fb" icon={faFacebook} /></a>
          <a href="https://www.instagram.com/lizanur_official/?hl=en"><FontAwesomeIcon className="eachIcon" id="insta" icon={faInstagram} /></a>
          </div>
        </Navbar>
      </>
    )
  }
}