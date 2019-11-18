import React from 'react';
// import LoadingIndicator from './LoadingIndicator.js'
import '../scss/BookList.scss'
import '../scss/ResponsiveBookList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group'
import BookInfo from '../static/BookInfo.js'
import Modal from './Modal.js'


export default class BookList extends React.Component {
  state = {
    books: [],
    isNewestFirst: true,
    modal: false,
    isAlphabetFirst: false,
  }

  componentDidMount = () => {
    this.setState({
      books: BookInfo.sort((a, b) => (b.year - a.year) || (b.id - a.id)),
      isLoading: false,
    })
  }

  toggleSortDate = (e) => {
    this.sortByDate()
    e.preventDefault()
  }

  toggleSortAlphabet = (e) => {
    this.sortByAlphabet()
    e.preventDefault()
  }

  sortByDate = () => {
    const { books, isNewestFirst } = this.state
    let newBooks = books
    if (isNewestFirst) {
      newBooks = books.sort((a, b) => a.year - b.year)
    } else {
      newBooks = books.sort((a, b) => b.year - a.year)
    }
    this.setState({
      isNewestFirst: !isNewestFirst,
      isAlphabetFirst: false,
      books: newBooks
    })
  }

  sortByAlphabet = () => {
    const { books, isAlphabetFirst } = this.state
    let newBooks = books
    books.sort((a, b) => {
      const bookNameA = a.name.toLowerCase(), bookNameB = b.name.toLowerCase();
      if (!isAlphabetFirst) {
        if (bookNameA < bookNameB) {
          return -1
        } else {
          return 1
        }
      } else {
        if (bookNameA > bookNameB) {
          return -1
        } else {
          return 1
        }

      }
    })
    this.setState({
      isAlphabetFirst: !isAlphabetFirst,
      isNewestFirst: false,
      books: newBooks
    })
  }


  render() {

    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="titleContainer">
            <div className="img"></div>
            <div className="myDescription">
              <p id="main">I am a writer</p>
              <p id="elaborate">This means I live in a crazy fantasy world with unrealistic expectations.</p>
              <div className="aboutMeContainerBtn">
                <a href="/" className="aboutMeBtn">About Me </a>
              </div>
              <div className="descriptionIcons">
                <a href="https://www.facebook.com/liza.razali"><FontAwesomeIcon className="d-eachIcon" id="d-fb" icon={faFacebook} /></a>
                <a href="https://www.instagram.com/lizanur_official/?hl=en"><FontAwesomeIcon className="d-eachIcon" id="d-insta" icon={faInstagram} /></a>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="sortingButton">
            <a href="/#" onClick={this.toggleSortAlphabet} className=" btn btn-color btn-animation-1">Sort by Alphabet</a>
            <a href="/#" onClick={this.toggleSortDate} className=" btn btn-color btn-animation-1">Sort by Year</a>
          </div>
          </CSSTransition>
        <div className="bookBox">
          {
            BookInfo.map((book, index) => {
              return (

                <CSSTransition
                  key={index}
                  in={true}
                  appear={true}
                  timeout={1000}
                  classNames="fade"
                >
                  <div className="eachBook" key={index}>
                    <div className="title">
                      <div className="bookName">{book.name}</div>
                      <div className="bookYear">({book.year})</div>
                    </div>
                    <div>
                      <div className="imageContainer">
                        <div className="bookImage-inner">
                          <div className="bookImage">
                            <img src={book.cover} alt="coverImage"></img>
                          </div>
                          <div className="bookImage-back">
                            <div className="stars">
                              <span className="starsOuter">
                                <span className="starsInner" style={{ width: `${book.rating / 5 * 100}%` }}></span>
                              </span>
                            </div>
                            <div className="buttons">
                              <div className="buyBtn">
                                {(book.source) ?
                                  <a href={book.source ? `${book.source}` : "/#"} className="btn btn-color btn-animation-1">Buy</a>
                                  :
                                  <a href="/" className="btn btn-color btn-animation-1">Contact Writer</a>
                                }
                              </div>
                              <Modal name={book.name} description={book.description} cover={book.cover} year={book.year} isbn={book.isbn} publisher={book.publisher} genre={book.genre} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>

              )
            })}
        </div>
      </>
    )
  }
}