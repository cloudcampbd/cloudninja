import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product as ModelProduct } from "../models";
import { DataStore } from "@aws-amplify/datastore";

import Navigation from "./navigation";
import AdminControls from "./adminControls";
import ProductLarge from "./productLarge";

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Alert from "@cloudscape-design/components/alert";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default function Product() {
  // this component is used when something hits /product/{id}
  // id is used to represent the product unique ID
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({
      type: 'success',
      message: "Success!" 
  });

  useEffect(() => {
    // Query the product based on id
    async function query() {
      if (product === undefined) {
        try {
          const product = await DataStore.query(ModelProduct, id);
          setProduct(product);
        } catch (error) {
          console.log("Error retrieving posts", error);
        }
      }
    }
    query();
  }, [id, product]);

  useEffect(() => {
    if (showAlert) {
        const timeId = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => {
            clearTimeout(timeId);
        };
    }
  }, [showAlert]);

  const alertHandler = (alertStatus) => {
    setAlertStatus(alertStatus);
    setShowAlert(true);
  };

  // Build the drop down list items
  const quantityOptions = [...Array(10)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      Qty: {i + 1}
    </option>
  ));

  // overrides for ProductLarge
  const overrides = {
    Quantity: {
      // We want to drop the placeholder for making the view better
      placeholder: null,
      // Populate the drop down with our quantity options
      children: quantityOptions,
      // On change of the drop down change the quantity value
      onChange: (e) => {
        setQuantity(e.target.value);
      },
    }
  };

  return (
    <AppLayout
      navigation={<Navigation activeHref="/" />}
      toolsHide={true}
      navigationWidth={200}
      minContentWidth={"80%"}
      maxContentWidth={'100%'}
      content={
        <ContentLayout
          header={
            <SpaceBetween size="m">
              <Header
                variant="h1"
                actions={
                  <AdminControls
                    showNewProduct={true}
                    showNewCategory={false}
                    productButtonText={"Edit Product"}
                    categoryButtonText={""}
                    alertHandler={alertHandler}
                    product={product}
                  />
                }
              >
                Product details
              </Header>
              {showAlert
              ? <Alert type={alertStatus.type}>{alertStatus.message}</Alert>
              : null
              }
            </SpaceBetween>
          }
        >
          <Container>
            <ProductLarge
              product={product}
              overrides={overrides}
            />
          </Container>    
        </ContentLayout>
      }
    />
  );
}