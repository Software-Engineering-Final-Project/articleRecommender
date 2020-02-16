import React, { Component, Fragment } from "react"


class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showKey: false
        }

        this.key = this.props.rest.key // The authentication login key

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(event) {
        this.setState({showKey:!this.state.showKey})
    }

    render() {
       console.log(this.key)
        return (
            <Fragment>
                <div className='row justify-content-center'>
                    <h1>Welcome to the Search Page</h1>
                </div>
                <div className='row justify-content-center'>
                {this.state.showKey ? 
                    <p>Your authentication key is: {this.key}</p>
                    :
                    <p></p>
                }
                </div>
                <div className='row justify-content-center'>
                    <button className='btn btn-secondary' onClick={this.handleClick}>Show Key</button>
                </div>
            </Fragment>
        )
    }
}

export default SearchPage