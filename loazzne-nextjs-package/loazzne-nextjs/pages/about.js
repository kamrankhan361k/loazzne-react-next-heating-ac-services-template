import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import AboutFour from "@/components/about-four";
import VideoOne from "@/components/video-one";
import TestimonialsOne from "@/components/testimonials-one";
import TeamOne from "@/components/team-one";
import SponsorOne from "@/components/sponsor-one";
import AboutTwo from "@/components/about-two";

const About = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="About Page">
        <HeaderOne />
        <PageHeader title="About Us" name="About" />
        <AboutFour />
        <VideoOne />
        <AboutTwo />
        <TestimonialsOne />
        <TeamOne extraClassName="section_border" />
        <SponsorOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default About;
