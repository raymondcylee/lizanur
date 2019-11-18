import React from 'react'
import '../scss/Homepage.scss'
import BookList from '../components/BookList.js'
import Navibar from '../components/Navbar.js'


export default class Homepage extends React.Component {

    render() {
        return (
            <>
                <Navibar />
                <BookList />
            </>
        )
    }
}