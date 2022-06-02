import {Component} from 'react'
import './index.css'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

class LoginPage extends Component {

    state = {
        usename: "",
        password: "",
        errorMsg: "",
        showError: "false"
    }



    // const = onchange Functions click enter value

    onChangeUserName = event => {
        this.setState({username: event.target.value})
    }
    onChangePassword = event => {
        this.setState({password: event.target.value})
    }


    // const = onsubmit function and return the jwt token and use login functions.

    onSubmitFunction = async event => {
        event.preventDefault();
    //     const {usename, password} = this.state
    //     const userDetails = {usename, password}
    //     const options = {
    //         method: 'POST',
    //         body: JSON.stringify(userDetails),
    //     } 

    //     const loginUrl = 'https://apis.ccbp.in/login'
    //     const response = await fetch(loginUrl, options)
    //     const data = await response.json()

    //     if (response.ok === true) {
    //         this.loginSuccess(data.jwt_token)
    //     } else {
    //         this.loginFailure(data.error_msg)
    //     }
    // }

    //success View 
     
    // loginSuccess = jwtToken => {
    //     Cookies.set('jwt_token', jwtToken, {expires:30})
    //     const {history} = this.props
    //     history.replace('/')
    }




    // Failure view 

    // loginFailure = errorMsg => {
    //     this.setState({showError:false, errorMsg})
    // }


    //  const = input label containers 

    renderUsernameContainer = () => {
        const {username} = this.state
        return(
            <div className='input_container'>
            <label className="label">Username*</label>
             <br/>
             <input type="text" value={username} placeholder="uername"
             className="input" onChange={this.onChangeUserName} />
        </div>
        )
    }

    renderPasswordContainer = () => {
        const {password} = this.state
        return(
            <div className='input_container'>
            <label className="label">Password*</label>
             <br/>
             <input type="password" value={password} placeholder="password"
             className="input" onChange={this.onChangePassword} />
        </div>
        )
    }


    render() {
         const {showError, errorMsg} = this.state

        // const jwtToken = Cookies.get("jwt_token")
        // if (jwtToken !== undefined ) {
        //     return <Redirect to="/" />
        // }
        return(

            <div className='loginpage_container'>
                <div className='responsive_container'>
                    <div className='leftside_section'>
                        <img 
                        src="https://res.cloudinary.com/diocftr6t/image/upload/v1651933010/Rectangle_1467Login-Image_krfcap.png"
                        className='login_image' alt="login" 
                        />
                    </div>
                    <div className='rightside_section'>
                        <div className='rightside'>
                            <img 
                            src="https://res.cloudinary.com/diocftr6t/image/upload/v1651940745/Group_7731Website_Logo_o1zltx.png"
                            className='logo' alt="logo"
                             />
                            <form className='form_container' onSubmit={this.onSubmitFunction}>
                            {this.renderUsernameContainer()}
                            {this.renderPasswordContainer()}
                            <button type="submit" className="submit-button">
                              Login
                            </button>
                            {showError && <p className="error-message">{errorMsg}*</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
