import React from 'react'
import '../scss/Button.scss'
import { Modal } from 'reactstrap'
import MoreInfo from './MoreInfo.js'



export default class AdvertModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    openModal = (e) => {
        e.preventDefault()
        this.setState({
            modal: true
        })
    }
    render() {
        return (
            <div>
                <a onClick={this.openModal} className="btn btn-color btn-animation-1" href="/#">More Info</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <MoreInfo toggle={this.toggle} name={this.props.name} description={this.props.description} cover={this.props.cover} year={this.props.year} isbn={this.props.isbn} publisher={this.props.publisher} genre={this.props.genre}/>
                </Modal>
            </div>
        )
    }
}