import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";

const ServiceDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title="Service Details" name="Service" />
        <ServiceDetails />
        <ContactTwo />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
