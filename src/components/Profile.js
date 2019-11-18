import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../scss/Profile.scss'
import '../scss/ResponsiveProfile.scss'
import { CSSTransition } from 'react-transition-group'
import items from './Carousel.js'
import { UncontrolledCarousel } from 'reactstrap'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.scroll = React.createRef()
    }

    scrollToProfile = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: this.scroll.current.offsetTop,
            behavior: 'smooth'
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
                    <div className="titleBox">
                        <div id="bigName">Liza Nur</div>
                        <div className="btnContainer">
                            <a href="/#" onClick={this.scrollToProfile} className="btn" id="scrollDownBtn">My Profile</a>
                            <a href="/Books" className="btn" id="booksBtn">My Books</a>
                        </div>
                        <div className="p-descriptionIcons">
                            <a href="https://www.facebook.com/liza.razali"><FontAwesomeIcon className="p-eachIcon" id="p-fb" icon={faFacebook} /></a>
                            <a href="https://www.instagram.com/lizanur_official/?hl=en"><FontAwesomeIcon className="p-eachIcon" id="p-insta" icon={faInstagram} /></a>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={1000}
                    classNames="fadein"
                >
                    <div className="img2">
                        <div id="blackbg"></div>
                    </div>
                </CSSTransition>
                <div ref={this.scroll} className="profile">
                    <div className="img3">
                        <UncontrolledCarousel items={items} />
                    </div>
                    <div className="profileDetail">
                        <p>
                            <span id="name">Liza Nur</span> memulakan kerjaya penulisan seawal belasan tahun dan novel keempatnya,
                            Biarkan Ia Pergi yang diterbitkan oleh Buku Prima, Karangkraf telah diulang cetak sebanyak empat kali.
                            Beliau dijemput untuk ditemu ramah dalam Program Televisyen ‘Nasi Lemak Kopi O’ disebabkan sambutan baik pembaca terhadap novel beliau berjudul Panggil Aku Kiah yang diterbitkan dalam tahun 2012.
                            Selain itu, Liza Nur turut beberapa kali menghadiri sesi temu ramah untuk program-program radio universiti. Dalam tahun 2019, novel beliau berjudul Bukan Gadis Biasa telah disunting oleh JS Pictures untuk diadaptasi sebagai drama televisyen untuk siaran TV3.
                        </p>
                        <p>
                            Beliau berasal dari Pulau Pinang dan merupakan anak ketiga daripada enam orang adik-beradik.
                            Mendapat pendidikan awal di SK Convent Butterworth dan SMK Convent Butterworth sebelum melanjutkan pengajian di UiTM, Shah Alam (Diploma in Investment Analysis) dan University of Adelaide, South Australia (Bachelor of Finance and Bachelor of Economics).
                            Pernah bekerja sebagai seorang pekerja kilang, peniaga telur ayam dan daun selom dan waitress.
                            Sedang berkhidmat sebagai fund manager sepenuh masa dan penulis secara sambilan.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}