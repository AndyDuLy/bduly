import React from 'react';
import NavComp from 'react-responsive-navbar';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import '../Styles/App.css';


const Menu = styled.div`
  border-bottom: 1.5px solid black;
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;


export default function Navbar() {
  return (
    <>
      <NavComp
          menuOpenButton={<FaBars size={30} color="Black" />}
          menuCloseButton={<IoMdClose size={30} color="#Black" />}
          changeMenuOn="800px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Menu>
              <ul>
                <li> <a className="RalewayRegular" href="/"> Home </a> </li>
                <li> <a className="RalewayRegular" href="#about"> About </a> </li>
                <li> <a className="RalewayRegular" href="#portfolio"> Portfolio </a> </li>
                <li> <a className="RalewayRegular" href="#contact"> Contact </a> </li>
              </ul>
            </Menu>
          }
        />
    </>
  )
}
