import { useState, useEffect } from "react";
import { Product } from "../models";
import { useBreakpointValue } from "@aws-amplify/ui-react";
import { Predicates, SortDirection } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";

import Navigation from "./navigation";
import AdminControls from "./adminControls";
import ProductSmallCollection from "./productSmallCollection";

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Alert from "@cloudscape-design/components/alert";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default function Recommended() {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState({
      type: 'success',
      message: "Success!" 
  });

  useEffect(() => {
    // Query prodcuts and limit to the top 5 as we need the top
    // rate products
    async function queryProduct() {
      if (products.length === 0) {
        try {
          const products = await DataStore.query(Product, Predicates.ALL, {
            sort: (p) => p.rating(SortDirection.DESCENDING),
            page: 0,
            limit: 5,
          });
          setProducts(products);
        } catch (error) {
          console.log("Error retrieving products", error);
        }
      }
    }
    queryProduct();
  }, [products]);

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

  // override collection properties and set page size based on screen size
  const overrides = {
    ProductSmallCollection: {
      itemsPerPage: useBreakpointValue({
        base: "1",
        small: "2",
        medium: "3",
        large: "4",
        xl: "5",
      }),
    },
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
                description="Top products"
                actions={
                  <AdminControls
                    showNewProduct={true}
                    showNewCategory={true}
                    productButtonText={"New Product"}
                    categoryButtonText={"New Category"}
                    alertHandler={alertHandler}
                    product={null}
                  />
                }
              >
                Recommended
              </Header>
              {showAlert
              ? <Alert type={alertStatus.type}>{alertStatus.message}</Alert>
              : null
              }
            </SpaceBetween>
          }
        >
          <Container>
              <ProductSmallCollection items={products} overrides={overrides} />
          </Container>
        </ContentLayout>
      }
    />
  );
}