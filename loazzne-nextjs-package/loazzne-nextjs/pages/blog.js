import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogTwo from "@/components/blog-two";

const Blog = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Blog Page">
        <HeaderOne />
        <PageHeader title="Blog Grid" name="Blog" />
        <BlogTwo />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Blog;
