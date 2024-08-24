import React, { Component } from 'react';
import './Header.css';
import search from '../../Asset/magnifying-glass-solid.svg'
import like from '../../Asset/heart-regular.svg'
import work from '../../Asset/briefcase-solid.svg'
import user from '../../Asset/user-regular.svg';
import logo from '../../Asset/Logo.svg'


export default function Header() {
    return (
        <div className="box">
            <div className="logos">
                <img id='logo' src={logo} alt="logo" />
                <h2>LOGO</h2>

                    <div className="icons">
                        <img src={search} alt="search"  />
                        <img src={like} alt="like"  />
                        <img src={work} alt="bag"  />
                        <img src={user} alt="user"  />
                    
                </div>
            </div>
            <div className="items">
                <h5>SHOP</h5>
                <h5>SKILLS</h5>
                <h5>STORIES</h5>
                <h5>ABOUT</h5>
                <h5>CONTACT US</h5>
            </div>
        </div>
    )
}