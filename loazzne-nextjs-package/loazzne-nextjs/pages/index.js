import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import CtaOne from "@/components/cta-one";
import FunfactOne from "@/components/funfact-one";
import GalleryOne from "@/components/gallery-one";
import TestimonialsOne from "@/components/testimonials-one";
import SponsorOne from "@/components/sponsor-one";
import CtaTwo from "@/components/cta-two";
import BlogOne from "@/components/blog-one";
import ContactOne from "@/components/contact-one";
const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home Page">
        <HeaderOne />
        <SliderOne />
        <FeatureOne />
        <AboutOne />
        <ServiceOne />
        <CtaOne />
        <FunfactOne />
        <GalleryOne />
        <TestimonialsOne />
        <SponsorOne />
        <CtaTwo />
        <BlogOne />
        <ContactOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
