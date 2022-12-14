import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/ebraheemnas'><BsGithub/></a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/ibrahim-nassar-6255041a7/'><BsLinkedin/></a>
    </div>
    <div>
      <a href='https://www.youtube.com/channel/UCJoELGlLXEfrD2yMUQKTQrw'><BsYoutube/></a>
    </div>
  </div>
);

export default SocialMedia;