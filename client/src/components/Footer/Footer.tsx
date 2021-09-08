import { Fade } from "react-awesome-reveal";
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
                <Fade cascade direction='up' triggerOnce damping={0.2}>
                    <ul className='footer__contacts'>
                        <Fade cascade direction='up' triggerOnce damping={0.2}>
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
                        </Fade>
                    </ul>


                    <div className='icons'>
                        <Fade cascade direction='up' triggerOnce damping={0.2}>
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
                        </Fade>
                    </div>

                    <div className='icons'>
                        <Fade cascade direction='up' triggerOnce damping={0.3}>
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
                        </Fade>
                    </div>

                    <div className='icons'>
                        <Fade cascade direction='up' triggerOnce damping={0.4}>
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
                        </Fade>
                    </div>
                </Fade>
            </div>
            <div className='copyright'>
                <FaRegCopyright className='copyright__logo' />
                <span>2021, CRUNCHY BOOTS</span>
            </div>
        </footer>
    )
}

export default Footer
