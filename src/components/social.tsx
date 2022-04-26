import React from 'react'

import twitter from '../assets/social/twitter.svg'
import telegram from '../assets/social/telegram.svg'
import medium from '../assets/social/medium.svg'
import github from '../assets/social/github.svg'
import discord from '../assets/social/discord.svg'

import './social.less'

const Social = () => {
  return (
    <div className="socials">
      <div className="flex">
      <div className="icon">
          <a
            href="https://t.me/Onespace_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://discord.com/invite/xud97tybPc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="30" src={discord} alt="" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://twitter.com/1space_me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="icon">
          <a
            href="https://github.com/Onespace-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Social
