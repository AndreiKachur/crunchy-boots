import React from 'react'
import './Footer.scss'
import { FaRegCopyright } from 'react-icons/fa';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';

import { FaCcAmazonPay } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { SiContactlesspayment } from 'react-icons/si';

function Footer() {
    return (
        <footer>
            <div className='footer'>
                <ul className='footer__contacts'>
                    <li className='footer__list-item'>
                        123456, London, Queen St.18
                </li>
                    <li className='footer__list-item'>
                        daily from 10:00 to 22:00
                </li>
                    <li className='footer__list-item'>
                        8-800-555-55-55
                </li>
                    <li className='footer__list-item'>
                        info@crunchyboots.com
                </li>
                </ul>

                <div className='icons'>
                    <a className='icons__item' href='https://ru-ru.facebook.com/'>
                        < FaFacebookSquare />
                        <span>facebook</span>
                    </a>
                    <a className='icons__item' href='https://twitter.com/'>
                        < FaTwitterSquare />
                        <span>twitter</span>
                    </a>
                    <a className='icons__item' href='https://www.instagram.com/'>
                        < AiFillInstagram />
                        <span>instagram</span>
                    </a>
                </div>

                <div className='icons'>
                    <div className='icons__item'>
                        < FaCcVisa />
                        <span>visa</span>
                    </div>
                    <div className='icons__item'>
                        < FaCcMastercard />
                        <span>mastercard</span>
                    </div>
                    <div className='icons__item'>
                        < SiAmericanexpress />
                        <span>am.express</span>
                    </div>
                </div>

                <div className='icons'>
                    <div className='icons__item'>
                        < FaCcAmazonPay />
                        <span>amazon</span>
                    </div>
                    <div className='icons__item'>
                        < FaCcPaypal />
                        <span>paypal</span>
                    </div>
                    <div className='icons__item'>
                        < SiContactlesspayment />
                        <span>contactless</span>
                    </div>
                </div>

            </div>

            <div className='copyright'>
                <FaRegCopyright className='copyright__logo' />
                <span>2021, CRUNCHY BOOTS</span>
            </div>

        </footer>
    )
}

export default Footer
