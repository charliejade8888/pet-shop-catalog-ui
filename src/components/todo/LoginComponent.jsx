import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    loginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password == 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.setState({ hasLoginFailed: false })
            this.setState({ showSuccessMessage: true })
            this.props.navigate(`/welcome/${this.state.username}`)
        } else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    handleChange(event) {
        console.log(event.target.name + ":" + event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className='btn btn=s' onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

export default LoginComponent