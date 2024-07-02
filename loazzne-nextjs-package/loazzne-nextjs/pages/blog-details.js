import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";

const BlogDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Blog Details Page">
        <HeaderOne />
        <PageHeader title="Blog Details" name="Blog" />
        <BlogDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default BlogDetailsPage;
