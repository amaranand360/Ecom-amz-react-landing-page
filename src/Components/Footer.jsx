import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import './Footer.css';

function Footer() {
  return (
    <div>
          <div className='footer'>
                <div className='intro'>
                    <h4>Created by Amar Kumar</h4>
                    <p>@Anandraj All Right Reserve</p>
                </div>
                <div className='footer_icons'>
                    <li>   <AiFillGithub /></li>
                    <li>    <AiFillLinkedin /></li>
                    <li>    <AiFillInstagram /></li>
                    <li>   <AiOutlineTwitter /></li>
                    <li><AiFillFacebook /> </li>
                </div>


            </div>
    </div>
  )
}

export default Footer
