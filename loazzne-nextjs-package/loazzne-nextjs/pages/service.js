import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ServiceInfo from "@/components/service-info";
import ServiceOne from "@/components/service-one";
import BenefitOne from "@/components/benefit-one";
import SponsorOne from "@/components/sponsor-one";

const Service = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Page">
        <HeaderOne />
        <PageHeader title="Service" name="Service" />
        <ServiceInfo />
        <ServiceOne />
        <BenefitOne />
        <SponsorOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Service;
