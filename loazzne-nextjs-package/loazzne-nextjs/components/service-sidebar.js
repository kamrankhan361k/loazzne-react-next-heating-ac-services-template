import { ServiceSidebarListData, ServiceSidebarOtherData } from "@/data";
import React, { useState } from "react";

const ServiceSidebar = () => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <div className="service_details_right">
      <h1 className="text-center">Our Services</h1>
      <div className="service_details_sv_cnt text-center service_cool_head">
        <ul className="nav nav-tabs">
          {ServiceSidebarListData.map(({ icon, title }, index) => (
            <li className={`${active === index ? "active" : " "}`} key={index}>
              <a
                href={`#service-sidebar-tab-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(index);
                }}
              >
                <div className="service_center_left">
                  <i className={icon}></i>
                  <span>{title}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {ServiceSidebarListData.map(({ list }, index) => {
          return index === active ? (
            <div className="tab-pane show fade in active animated fadeIn">
              <div className="service_category">
                <ul>
                  {list.map(({ label, url }, index) => (
                    <li key={index}>
                      <a href={url}>
                        {label}
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null;
        })}
      </div>

      <div className="service_details_sv_cnt text-center service_class_remove mb-30">
        <ul className="nav nav-tabs">
          {ServiceSidebarOtherData.map(({ icon, title }, index) => (
            <li
              className={`${activeTwo === index ? "active" : " "}`}
              key={index}
            >
              <a
                href={`#service-sidebar-two-tab-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTwo(index);
                }}
              >
                <div className="service_center_left">
                  <i className={icon}></i>
                  <span>{title}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {ServiceSidebarOtherData.map(({ content }, index) => {
          const { icon, title } = content;
          function createMarkup() {
            return { __html: title };
          }
          return index === activeTwo ? (
            <div className="tab-pane show fade in active animated fadeIn">
              <div className="service_details_contact">
                <span className={icon}></span>
                <h2 dangerouslySetInnerHTML={createMarkup()} />
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ServiceSidebar;
