import '../App.css';
import {NavLink} from 'react-router-dom';

let Nav =()=>{
    return (
        <div>
            <nav>
                <div className ='logo'>
                    <p>Logo</p>
                </div>
                <div>
                    <ul>
                        <li><NavLink to = '/home'>Home</NavLink></li>
                        <li><NavLink to = '/about'>About</NavLink></li>
                        <li><NavLink to = '/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav