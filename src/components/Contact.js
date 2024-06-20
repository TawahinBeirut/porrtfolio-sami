import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Assurez-vous d'avoir installé react-icons

export default function Contact() {

    return (
        <div className="bg-[#FFF5E1] py-16" id='contact'>
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-8">Contact</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="flex flex-col items-center">
                        <FaEnvelope className="text-2xl mb-2" />
                        <p>samiabbas2004@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPhone className="text-2xl mb-2" />
                        <p>06 20 99 38 67</p>
                    </div>
                    <div className="border-r border-gray-400 h-16 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <FaInstagram className="text-2xl mb-2" />
                        <p>lb_sami21</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaLinkedin className="text-2xl mb-2" />
                        <p>Sami Abbas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}