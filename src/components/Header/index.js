import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'



class Header extends Component {


    render() {
        return (
            <nav>
                <div className="bg">
                    <div className='image_container' >
                        {/* <Link to="/"> */}
                        <img 
                        src="https://res.cloudinary.com/diocftr6t/image/upload/v1651940745/Group_7731Website_Logo_o1zltx.png"
                        className="website-logo"
                        alt="website logo" />
                    {/* </Link> */}
                    </div>
                    <ul className="ul_container">
                        <li className='links'>
                            <Link to="/loginPage">LoginPage</Link>
                        </li>
                        <li className='links'>
                            <Link to="/footer">Footer</Link>
                        </li>
                        <li className='links'>
                            <Link to="/notFound">NotFound</Link>
                        </li>
                        <button className='button'>Logout</button>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header