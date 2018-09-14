import React from 'react';
import { FaLinkedin, FaFacebookF, FaGithub, FaSnapchat } from 'react-icons/fa';

const styledDiv = {
  padding: '8px',
};

const styledIcon = {
 height: '50px',
 width: '50px'
};

const styledList = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'flex-start'
};

const socialIcons = props => {
    return(
        <div style={styledDiv}>
        <ul style={styledList}>
      <li style={styledDiv}><a><FaLinkedin style={styledIcon}/></a></li>
      <li style={styledDiv}><a><FaFacebookF style={styledIcon}/></a></li>
      <li style={styledDiv}><a><FaGithub style={styledIcon} /></a></li>
      <li style={styledDiv}><a><FaSnapchat style={styledIcon} /></a></li>
      </ul>
    </div>
    )
};

export default socialIcons;