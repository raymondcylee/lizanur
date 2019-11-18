import React from 'react'
import loadingGIF from '../static/loading.gif'
import '../scss/LoadingIndicator.scss'

export default class LoadingIndicator extends React.Component {




    render() {
        return (
            <div className="loadingContainer">
                <img id="loadingIndicator" src={loadingGIF} alt="loading" />
            </div>
        )

    }
}
