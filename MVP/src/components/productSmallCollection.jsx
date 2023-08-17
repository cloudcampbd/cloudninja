import { Product } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ProductSmall from "./productSmall";
import { Collection } from "@aws-amplify/ui-react";

export default function ProductSmallColllection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Product,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={10}
      direction="row"
      alignItems="stretch"
      justifyContent="center"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProductSmallCollection")}
    >
      {(item, index) => (
        <ProductSmall
          product={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProductSmall>
      )}
    </Collection>
  );
}