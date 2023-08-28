import { Product } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ProductMedium from "./productMedium";
import { Collection } from "@aws-amplify/ui-react";

export default function ProductMediumCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Product,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProductMediumCollection")}
    >
      {(item, index) => (
        <ProductMedium
          product={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProductMedium>
      )}
    </Collection>
  );
}
