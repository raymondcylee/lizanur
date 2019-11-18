import React from 'react';
import { ModalHeader, ModalBody } from 'reactstrap'
import '../scss/MoreInfo.scss'

export default class MoreInfo extends React.Component {

    render() {
        return (
            <div>
                <ModalHeader toggle={this.props.toggle}>{this.props.name}</ModalHeader>
                <ModalBody>
                    <div className="information">
                        <img src={this.props.cover} alt="coverImage" />
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Year</td>
                                        <td>{this.props.year}</td>
                                    </tr>
                                    <tr>
                                        <td>Publisher</td>
                                        <td>{this.props.publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>{this.props.isbn}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre</td>
                                        <td>{this.props.genre.map((value, index) => {
                                            return <li key={index}>{value}</li>
                                        })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modalDescription">
                        {this.props.description}
                    </div>
                </ModalBody>
            </div>
        )
    }
}