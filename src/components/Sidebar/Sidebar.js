import React from 'react';
import './Sidebar.css'
import logo from '../../assets/images/logo/logo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <>

            <header className="flex-row px-1 nav-bar">
                <img className='logo flex-row' src={logo} alt='logo' />
                <h2 className='flex-row'>
                    Welcome to my Portfolio!
                </h2>

                <nav className='flex-row'>

                    <ul className="flex-row">
                        <li className="mx-2">
                            <a data-testid="about" href="#about">
                                <FontAwesomeIcon icon={faHome} color='#4d4de' />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a data-testid="about" href="#about">
                                <FontAwesomeIcon icon={faFile} color='#4d4de' />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a data-testid="about" href="#about">
                                <FontAwesomeIcon icon={faEnvelope} color='#4d4de' />
                            </a>
                        </li>

                    </ul>
                </nav>
            </header>

        </>

    )
}

export default Sidebar