import * as React from "react";
import {
  getOverrideProps
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Image,
  Rating,
  SelectField,
  Text,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function ProductLarge(props) {
  const { product, overrides, ...rest } = props;
  const [image, setImage] = React.useState(product?.image);

  let navigate = useNavigate();
  const routeChange = (event) => {
    event.preventDefault();
    navigate(`${"/product/"}${product?.id}`);
  };

  React.useEffect(() => {
    function configureImage() {
      if (product?.image) {
        setImage(product.image);
      } else {
        setImage('https://retail-demo-store-us-east-1.s3.amazonaws.com/images/product_image_coming_soon.png');
      }
    }

    configureImage();
  }, [product]);

  return (
    <Flex
      gap="40px"
      direction="row"
      width="857px"
      height="356px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProductLarge")}
    >
      <Image
        width="424px"
        height="356px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={image}
        className="clickable"
        onClick={(e) => {
          routeChange(e);
        }}
        {...getOverrideProps(overrides, "Image")}
      ></Image>
      <Flex
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Details")}
      >
        <Text
          fontFamily="Open Sans"
          fontSize="28px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.13px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          className="clickable"
          children={product?.name}
          onClick={(e) => {
            routeChange(e);
          }}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Rating
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          value={product?.rating}
          maxValue="5"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PriceFrame")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Price:"
            {...getOverrideProps(overrides, "PriceLabel")}
          ></Text>
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"$"}${product?.price}`}
            {...getOverrideProps(overrides, "Price")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InventoryFrame")}
        >
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Items currently in stock:"
            {...getOverrideProps(overrides, "InventoryLabel")}
          ></Text>
          <Text
            fontFamily="Open Sans"
            fontSize="20px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={product?.current_stock}
            {...getOverrideProps(overrides, "Inventory")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="274px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Order")}
        >
          <SelectField
            width="132px"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "Quantity")}
          ></SelectField>
          <Button
            width="132px"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Add to Cart"
            {...getOverrideProps(overrides, "AddToCart")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Open Sans"
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={product?.description}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </Flex>
  );
}
