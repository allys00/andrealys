import React from 'react';
import Icon from '../Icon';

import './social-media.css';

const openSocialPage = (url) => {
  window.open(url, '_blank');
}

const linkedin_url = 'https://www.linkedin.com/in/andr%C3%A9-alys-s-b37520ab/';
const github_url = 'https://github.com/allys00';

const SocialMedia = () => (
  <div className="social-media-container">
    <div className="social-media" onClick={() => openSocialPage(linkedin_url)}>
      <Icon name="linkedin" width="40px" height="40px" />
    </div>
    <div className="social-media" onClick={() => openSocialPage(github_url)}>
      <Icon name="github" width="40px" height="40px" />
    </div>
  </div>
)

export default SocialMedia;