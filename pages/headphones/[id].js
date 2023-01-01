import { useRouter } from "next/router";
import ProductDetails from "../../components/ProductDetails";
import React from "react";
import data from "../../public/data.json";
import { useDispatch } from "react-redux";

export async function getServerSideProps(context) {
  return { props: {} };
}

const HProduct = () => {
  const router = useRouter();
  return (
    <ProductDetails
      product={data.find((item) => item.slug === router.query.id)}
    />
  );
};

export default HProduct;
