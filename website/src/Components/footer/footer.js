import './footer.css';

export default function Footer() {
    return (
        <div className="container">
            <div className="upper_cont">
                <div className="left_upper">
                    <h5>BE THE FIRST TO KNOW</h5>
                    <p style={{ fontWeight: '200', fontSize: '15px' }}>Sign up for updates from metta muse. </p>
                    <div className="input_user">
                        <input type="id" name="" id="user_id" />
                        <button type="button" style={{ marginLeft: '8px' }}>SUBSCRIBE</button>
                    </div>

                </div>
                <div className="right_upper">
                    <h5>CONTACT US</h5>
                    <p></p>
                    <p></p>
                    <h5>CURRENCY</h5>
                    <p>Transctions will be completed in Euros and a currency reference is available on hover</p>
                </div>
            </div>
            <hr />
            <div className="lower_cont">
                <div className="left_lower">
                    <div className="left">
                        <h5>metta muse</h5>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </div>
                    <div className="right">
                        <h5>Orders & Shipping</h5>
                        <li>Join/Login as a Seller</li>
                        <li>Payment $ Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                    </div>
                </div>

                <div className="right_lower">

                    <h5>FOLLOW US</h5>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p>I</p>
                        <p>L</p>
                    </div>
                    <h6>Metta muse ACCEPTS</h6>
                    <div className="payments">
                        <img src="" alt="Gpay" />
                        <img src="" alt="MC" />
                        <img src="" alt="PP" />
                        <img src="" alt="Amex" />
                        <img src="" alt="AP" />
                        <img src="" alt="Pay" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright 2003 mettamuse. All rights reserved
            </div>

        </div>
    )
}