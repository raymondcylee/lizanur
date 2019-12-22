import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import '../scss/MoreInfo.scss'


export default class NewBookModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>New Release</ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}