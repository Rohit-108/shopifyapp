
import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { Card, OrderDetails, OrderGraphs } from "../components";
import { useAuthenticatedFetch } from "@shopify/app-bridge-react";
import { useState, useEffect } from "react";

export default function HomePage() {

  let fetch = useAuthenticatedFetch();
  let [products, setproducts] = useState(0)

  async function fetchProducts(){
    try{
      let request = await fetch("api/products/count")
      let response = await request.json();
      console.log(response);
    }
    catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    fetchProducts();
  },[])



  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graphs-section">
          <OrderGraphs />
        </div>
        <div className="cards-section">
          <Layout>
            <Card title="Total Order" />
            <Card title="Fulfilled Order" />
            <Card title="Remains Order" />
            <Card title="Total products" data={products} productCard/>
            <Card title="Total Collections" />
          </Layout>
        </div>
        <div className="order-details-section">
          <OrderDetails />
        </div>
      </div>
    </Page>
  );
}