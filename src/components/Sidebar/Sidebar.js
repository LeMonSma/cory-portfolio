import React, { useCallback } from 'react';
import './Sidebar.css'
import logo from '../../assets/images/logo/logo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHome, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'




const Sidebar = ({ selected, onSelect }) => {

    const navHandler = useCallback((e) => {
        const page = e.currentTarget.dataset.page
        onSelect(page)
    }, [])
    return (


        <header className="col-1 container">
            <img className='logo mb-5' src={logo} alt='logo' />

            <nav className='mt-5 ml-2'>

                <ul className='' >

                    <li className={`col-md-2 offset-md-2 mt-5 sidebar-li ${selected === 'about' && 'navActive'}`} onClick={navHandler} data-page='about'>
                        <span data-testid="about">
                            <FontAwesomeIcon className='fa-2xl' icon={faHome} />
                        </span>
                    </li>
                    <li className={`col-md-2 offset-md-2 mt-5 sidebar-li ${selected === 'portfolio' && 'navActive'}`} onClick={navHandler} data-page='portfolio'>
                        <span data-testid="portolio">
                            <FontAwesomeIcon className='fa-2xl' icon={faCode} />
                        </span>
                    </li>
                    <li className={`col-md-2 offset-md-2 mt-5 sidebar-li ${selected === 'contact' && 'navActive'}`} onClick={navHandler} data-page='contact'>
                        <span data-testid="contact" href="#about">
                            <FontAwesomeIcon className='fa-2xl' icon={faEnvelope} />
                        </span>
                    </li>
                    <li className='col-md-2 offset-md-2 mt-5 sidebar-li'>
                        <a target='blank' href='https://github.com/LeMonSma'>
                            <FontAwesomeIcon className='fa-2xl' icon={faGithub} />
                        </a>
                    </li>
                    <li className='col-md-2 offset-md-2 mt-5 sidebar-li'>
                        <a target='blank' href='https://my.indeed.com/p/coryb-c6pp2rc'>
                            <FontAwesomeIcon className='fa-2xl' icon={faFileAlt} />
                        </a>
                    </li>

                </ul>

            </nav>
        </header>



    )
}

export default Sidebar