import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-section'>
                <div>
                    <h2>Royal Wrists</h2>
                    <p>Fast Growing Watch Brand</p>
                    <div className='mt-3 mb-3'>
                        <h4>Follow us</h4>
                        <i class="fab fa-facebook fa-2x me-2"></i>
                        <i class="fab fa-instagram fa-2x me-2"></i>
                        <i class="fab fa-twitter fa-2x me-2"></i>
                        <i class="fab fa-youtube fa-2x"></i>
                    </div>
                </div>
                <div className='footer-links mb-4'>
                    <h4>Quick Link</h4>
                    <a href="">Privacy & Policy</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Our Blog</a>
                    
                </div>
                <div>
                    <h4>Payment</h4>
                    <i class="fab fa-cc-visa fa-2x me-2"></i>
                    <i class="fab fa-cc-mastercard fa-2x me-2"></i>
                    <i class="fab fa-cc-amex fa-2x me-2"></i>
                    <i class="fab fa-cc-discover fa-2x me-2"></i>
                    <i class="fab fa-cc-paypal fa-2x"></i>
                </div>
            </div>
            <p className='copyright pb-5'><i class="fas fa-copyright"></i> All rights reserved by Royal Wrists</p>
        </div>
    );
};

export default Footer;