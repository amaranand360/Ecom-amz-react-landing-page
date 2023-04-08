import React from 'react';
import './Header.css';
//import  {Link}  from "react-router-dom";
import india from '../images/flage.jpeg';
import headerlogo from '../images/amzlogo.png';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { GrLocation } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
//import { useStateValue } from './StateProvider';
//import { SlLocationPin } from "react-icons/si";

function Header() {
    //const [{ basket }] = useStateValue();

    return (
        <>
            <div className="header">
                <a style={{textDecoration:'none'}} href="/" >
                <img className='amz_logo'
                    src={headerlogo} alt="Error" /> </a>
                <div className='location'> <GrLocation /></div>
                <div className='header-option'>
                    <span className='header_op_l1'>Deliver to </span>
                    <span className='header_op_l2'> India</span>
                </div>
                <div className='header_search'>
                    <div className='Searchall'>
                        <p >All</p>
                    </div>
                    <input
                        className='searchinput' type="text" placeholder='Search Amazon' />
                    <div className='Searchicon'>
                        <FaSearch />
                    </div>
                    {/* < SearchIcon className="header__searchiocns"/> */}
                </div>



                <div className='header_nav'>

                    <div className='header-option'>
                        <span className='header_op_l1'> <img src={india} style={{ height: '22px', width: '40px' }} alt="ERROR" /> </span>
                        <span className='header_op_l2'>EN <BsFillCaretDownFill /> </span>
                    </div>

                    <div className='header-option'>
                        <a style={{textDecoration:'none', textDecorationColor:'white'}} href='/login'>
                        <span className='header_op_l1'>Hello,Sign In</span></a>
                        <span className='header_op_l2'>Account & Lists <BsFillCaretDownFill /> </span>
                    </div>

                    <div className='header-option'>
                        <span className='header_op_l1'>Return</span>
                        <span className='header_op_l2'>& Order</span>
                    </div>

                    <div className='header-option'>
                        <span className='header_op_l1'>Your</span>
                        <span className='header_op_l2'>Prime</span>
                    </div>

                  

                    <a style={{textDecoration:'none'}} href='/' >
                    <div className='header-option'>
                        <span> <FaShoppingCart /> {0} </span>
                        <span className='header_op_l2'>Cart</span>
                    </div>
                    </a>
                </div>
            </div>

            <div className='HEADER2'>
                <div className='Left_nav'>
                    <ul>
                        <div className='menuicon'> <AiOutlineMenu /></div>
                        <li> All</li>
                        <li> Today's Deal </li>
                        <li>Customer Services</li>
                        <li>Registry</li>
                        <li>Prime</li>
                        <li>Amazon pay</li>
                        <li>Gift Cards</li>
                        <li>Sell</li>
                    </ul>
                </div>
                <div className='Right_nav'>
                    <ul>
                        <li> Shop deals in Electronic</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;