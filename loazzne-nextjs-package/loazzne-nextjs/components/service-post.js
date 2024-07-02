import React from "react";
import servicedetails1 from "@/images/services/service-details.jpg";
import Img from "./img";

const ServicePost = () => {
  return (
    <div className="service_details_left">
      <Img src={servicedetails1} alt="Service Details Image" />
      <h1>Air Conditioner Repair</h1>
      <p>
        Lorem Ipsum is simply dummy text of the rinting and typesetting industry
        has been the ndustry standard dummy text ever sincer they llam id
        condimentum purus In non ex at ligula fringilla bortis. Ut et mauris
        auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada
        dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus
        porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales
        des volutpat diam, id sagittis purus egestas dapibus.
      </p>
      <h2>Common Air Conditioner Problems</h2>
      <ul>
        <li>
          <i className="fa fa-check-circle"></i> The air conditioner won&apos;t
          turn on.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Weird noises or vibrating occur
          at startup or during operation.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Warm air exits the supply
          registers.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> The unit hums, but the fan
          doesn&apos;t turn on.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> The fan runs, but the
          compressor isn&apos;t working.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Water is pooling around the air
          conditioner
        </li>
      </ul>
      <p className="extra_mr">
        If you believe your air conditioning unit requires emergency service,{" "}
        <a href="#">click here</a> for information about our 24/7 repair
        services.
      </p>
      <h2>Should I Repair or Replace My Air Conditioner?</h2>
      <ul className="service_details_ac">
        <li>
          <i className="fa fa-check-circle"></i> Age - If your AC is more than
          10 years old and giving you trouble, it may be in your best interest
          of consider a replacement.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Investment const - Is a new
          system a better investment in the long run? An Aire Serv air
          conditioner technician can help you calculate your return on
          investment to determine if on upgrade in more beneficial than repair.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Utility rates - You may think
          you can&apos;t afford on air conditioner replacement, but a more
          efficient unit consumes less electricity and could save you big time
          on energy bills.
        </li>
      </ul>
      <p className="info_mr">
        Visit our <a href="#">air conditioner maintenance page</a> for helpful
        tips and information.
      </p>
    </div>
  );
};

export default ServicePost;
