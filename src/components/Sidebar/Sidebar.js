import React, { useCallback } from 'react';
import './Sidebar.css'
import logo from '../../assets/images/logo/logo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ selected, onSelect }) => {

    const navHandler = useCallback((e) => {
        const page = e.currentTarget.dataset.page
        onSelect(page)
    }, [])
    return (


        <header className="col-2">
            <img className='logo mb-5' src={logo} alt='logo' />

            <nav className='mt-5 ml-2'>

                <ul >

                    <li className={` mt-5 ${selected === 'about' && 'navActive'}`} onClick={navHandler} data-page='about'>
                        <span data-testid="about">
                            <FontAwesomeIcon icon={faHome} color='#4d4de' />
                        </span>
                    </li>
                    <li className={` mt-5 ${selected === 'portfolio' && 'navActive'}`} onClick={navHandler} data-page='portfolio'>
                        <span data-testid="portolio">
                            <FontAwesomeIcon icon={faFile} color='#4d4de' />
                        </span>
                    </li>
                    <li className={` mt-5 ${selected === 'contact' && 'navActive'}`} onClick={navHandler} data-page='contact'>
                        <span data-testid="contact" href="#about">
                            <FontAwesomeIcon icon={faEnvelope} color='#4d4de' />
                        </span>
                    </li>

                </ul>

            </nav>
        </header>



    )
}

export default Sidebar