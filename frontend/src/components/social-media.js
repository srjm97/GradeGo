import React from 'react'

import PropTypes from 'prop-types'

import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social-media.css'

const SocialMedia = () => {
    return (
        <div className="social-media-container">
            <ul>
                <li><a href="https://www.facebook.com/martydevelopment/">
                <FontAwesomeIcon icon={faFacebook} />
                </a></li>
                <li><a href="https://www.instagram.com/marty.development/">
                <FontAwesomeIcon icon={faInstagram} />
                </a></li>
                <li><a href="https://github.com/MartyDevelopment">
                <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li><a href="https://github.com/MartyDevelopment">
                <FontAwesomeIcon icon={faGithub} />
                </a></li>
            </ul>
        </div>
    )
}

export default SocialMedia;