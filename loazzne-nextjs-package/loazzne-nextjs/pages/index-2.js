import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import HeaderTwo from "@/components/header-two";
import CtaOne from "@/components/cta-one";
import BlogOne from "@/components/blog-one";
import TestimonialsOne from "@/components/testimonials-one";
import ServiceOne from "@/components/service-one";
import ContactTwo from "@/components/contact-two";
import VideoOne from "@/components/video-one";
import AboutTwo from "@/components/about-two";
import SponsorOne from "@/components/sponsor-one";
import TeamOne from "@/components/team-one";
import AboutThree from "@/components/about-three";
import SliderTwo from "@/components/slider-two";
const HomeTwo = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home Two">
        <HeaderTwo />
        <SliderTwo />
        <AboutThree />
        <SponsorOne />
        <ServiceOne />
        <TeamOne />
        <TestimonialsOne />
        <AboutTwo />
        <VideoOne />
        <BlogOne />
        <ContactTwo />
        <CtaOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeTwo;
