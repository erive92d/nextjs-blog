import { getSingleProduct } from "../../lib/API";
import { getAllProductIds } from "../../lib/API";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Product({ productData }) {
  console.log(productData);
  return (
    <Layout>
      <Head>
        <title>{productData.title}</title>
      </Head>
      <div>
        <h1 className="border">{productData.title}</h1>
        <h3>{productData.price}</h3>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProductIds();
  console.log(paths, "-------------------");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params, "@@@@@@@@@@@@@@@@@");
  // Fetch necessary data for the blog post using params.id
  const productData = await getSingleProduct(params.id);
  return {
    props: {
      productData,
    },
  };
}
