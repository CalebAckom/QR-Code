import React from 'react';
import qrCodeImage from './../../images/image-qr-code.png';
import './qr-code.css';

function QRCodeComponent() {
    return (
        <div className="container">
            <div className="card">
                <div className="image">
                    <img src={qrCodeImage} alt="This is Frontend Mentor QR code" />
                </div>
                <div className="text">
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    );
}

export default QRCodeComponent;
