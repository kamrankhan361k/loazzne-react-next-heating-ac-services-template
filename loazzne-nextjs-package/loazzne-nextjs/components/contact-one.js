import React from "react";

const ContactOne = () => {
  return (
    <section className="contact_form_area">
      <div className="contact_form_width">
        <h1 className="contact_map_title text-center">
          We&apos;re not putting on airs - our work is guaranteed to satisfy.
        </h1>
        <div id="map">
          <iframe
            title="template google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="contact_form_width contact-right">
        <div className="hero-title-with-shape">
          <h4 className="heading_with_border">Get a free quote</h4>
          <h1>To request a service call, please fill out the form below</h1>
        </div>
        <form action="#" method="post">
          <input
            className="half_width input_m_right"
            type="text"
            name="fname"
            placeholder="Your name"
          />
          <input
            className="half_width"
            type="EMAIL"
            name="email"
            placeholder="Email address"
          />
          <input type="tel" name="tell" placeholder="Phone number" />
          <span className="select_icon">
            <select name="select" id="select">
              <option value="option0">Select Service</option>
              <option value="option1">Service 1</option>
              <option value="option2">Service 2</option>
              <option value="option3">Service 3</option>
              <option value="option4">Service 4</option>
            </select>
          </span>
          <button className="btn-yellow" value="SUBMIT NOW">
            SUBMIT NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactOne;
