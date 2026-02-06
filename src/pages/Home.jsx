import React, { useState } from "react";
import Layout from "../component/Layout";
import CarouselView from "../component/CarouselView";
import Category from "../component/Category"
import Trending from "../component/Trending";
import { products } from "../data_json";
import ProductJson from "../component/ProductList";
import ProductList from "../component/ProductList";

const Home = () => {
  const FashionList = products.filter(
      (product) => product?.Type?.toLowerCase() == "fashion"
    );
  const ElectronicList = products.filter(
      (product) => product?.Type?.toLowerCase() == "electronics"
    );

  return (
    <Layout>
    <CarouselView/>
    <Category/>
    <Trending/>
    <ProductList ProductJson={FashionList} title='Fashion'/>
    <ProductList ProductJson={ElectronicList} title='Electronics'/>
    </Layout>
  );
};

export default Home;
