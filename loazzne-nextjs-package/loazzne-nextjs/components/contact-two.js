import React from "react";

const ContactTwo = () => {
  return (
    <section className="contact_form_area ctf_gray section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">Get a free quote</h4>
                <h1>
                  To request a service call, please fill out the form below
                </h1>
              </div>
              <p>
                There are many variations of passages of new lorem ipsum
                available, but the majority have suffered alteration in some
                form by injected humour, or randomised words which don&apos;t
                look even slightly believable.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2">
              <form action="#" method="post">
                <input
                  type="text"
                  placeholder="Your name"
                  className="half_width input_m_right"
                />
                <input
                  type="EMAIL"
                  placeholder="Email Address"
                  className="half_width"
                />
                <input type="tel" placeholder="Phone Number" />
                <span className="select_icon">
                  <select name="select" id="select">
                    <option value="option0">Select Service</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                  </select>
                </span>
                <button className="btn-yellow" value="SUBMIT NOW">
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
