import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Category as ModelCategory, Product } from "../models";
import { DataStore } from "@aws-amplify/datastore";

import Navigation from "./navigation";
import ProductMediumCollection from "./productMediumCollection";

import AppLayout from '@cloudscape-design/components/app-layout';
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Multiselect from "@cloudscape-design/components/multiselect";
import ContentLayout from "@cloudscape-design/components/content-layout";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useBreakpointValue } from "@aws-amplify/ui-react";

export default function Category() {
  // this component is used when something hits /category/{name}
  // name is used to represent the category we are viewing
  const { name } = useParams();
  const [prevName, setPrevName] = useState(""); //prevName allows us to see if the category has changed
  const [products, setProducts] = useState([]); //products is a list of the products to display filtered down
  const [allStyles, setAllStyles] = useState([]); //allStyles is a list of all the styles for building the filters
  const [filteredStyles, setFilteredStyles] = useState([]); //filteredStyles is a list of styles that are selected for filtering

  useEffect(() => {
    // Query for categories to get all the styles that make up that category
    // so we can build the filter display
    async function queryCategory() {
      try {
        const categories = await DataStore.query(ModelCategory, (c) => 
          c.name.eq(name)
        );
        if (categories) {
          setAllStyles(categories[0].styles);
          return categories[0].id;
        }
      } catch (error) {
        console.log("Error retrieving category", error);
      }
    }

    // queryProduct is used to query the products and filter by category and filtered again
    // based on any selected filters
    async function queryProduct() {
      try {
        const categories = await DataStore.query(ModelCategory, (c) =>
          c.name.eq(name)
        );
        if (categories) {
          const products = await DataStore.query(Product, 
            (c) => c.categoryID.eq(categories[0].id)
          );
          
          const filterList = filteredStyles.map((style) => {
              return style.label;
          });

          // Filter the results if a style is selected
          setProducts(
            products.filter(
              (product) =>
                filterList.includes(product.style) ||
                filteredStyles.length === 0
            )
          );
        }
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
    }

    if (prevName !== name || prevName !== "") {
      if (prevName !== name) {
        setFilteredStyles([]);
      }
      queryCategory();
      setPrevName(name);
      queryProduct();
    }
  }, [name, filteredStyles, prevName]);

  // overrides for our collection
  // Change the style of the collection to be a list on smaller screen formats and grid
  // on larger formats. Also change the items displayed depending on the screen size
  const overrides = {
    ProductMediumCollection: {
      type: useBreakpointValue({
        small: "list",
        base: "list",
        medium: "grid",
      }),
      itemsPerPage: useBreakpointValue({
        base: "5",
        small: "5",
        medium: "10",
        large: "10",
        xl: "10",
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
              >
                {`Products - ${name}`}
              </Header>
              <Multiselect
                selectedOptions={filteredStyles}
                onChange={({detail}) => {
                  setFilteredStyles(detail.selectedOptions)
                }}
                deselectAriaLabel={e => `Remove ${e.label}`}
                options={
                  allStyles.map((style) => {
                    return {
                      label: style,
                      value: style
                    }
                  })
                }
                placeholder="Select styles"
                selectedAriaLabel="Selected"
              />
            </SpaceBetween>
          }
        >
          <Container>
              <ProductMediumCollection
                items={products}
                overrides={overrides}
              />
          </Container>
        </ContentLayout>
      }
    />
  );
}