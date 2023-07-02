import React from "react";
import "./contactUs.css";
import Layout from "../../../utils/layout/layout";
import Contact from "../../../assets/contact.png";
import Colours from "../../../assets/colours.svg";
import Input from "../../reusable-components/input/input";
import Button from "../../reusable-components/button/button";

const ContactUs = () => {
  return (
    <Layout>
      <div className="contactus-container">
        <div className="contactus-first">
          <div className="contactus-info">
            <h2>Information About us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
              lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <img src={Colours} alt="colours" />
          </div>
          <div className="contactus-contact">
            <h2>Contact Way</h2>
            <div className="contactus-contact-wrapper">
              <div className="contactus-contact-single">
                <div className="blue-colour"></div>
                <div>
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail:barnhouseagrointegrated@gmail.com</p>
                </div>
              </div>
              {/* <div className="contactus-contact-single">
                <div className="pink-colour"></div>
                <div>
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div> */}
            </div>
            <div className="contactus-contact-wrapper">
              <div className="contactus-contact-single">
                <div className="orange-colour"></div>
                <div>
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
              </div>
              {/* <div className="contactus-contact-single">
                <div className="green-colour"></div>
                <div>
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="contactus-second">
          <div className="get-in-touch">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <div className="contact-form">
              <div className="contact-form-double">
                <div>
                  <Input placeholder="Your Name*" type="input" />
                </div>
                <div>
                  <Input placeholder="Your E-mail" type="input" />
                </div>
              </div>
              <div className="contact-form-single">
                <Input placeholder="Subject*" type="input" />
              </div>
              <div className="contact-form-single">
                <Input placeholder="Type Your Message*" />
              </div>
              <Button text="Send Mail" />
            </div>
          </div>
          <div className="get-in-img">
            <img src={Contact} alt="contact" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
