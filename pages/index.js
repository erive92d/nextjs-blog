import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import { getProducts } from "../lib/API";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProducts = await getProducts();
  return {
    props: {
      allPostsData,
      allProducts,
    },
  };
}

export default function Home({ allPostsData, allProducts }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
      <div>
        <h1>Shopping Items</h1>
        <ul>
          {allProducts.map(({ title, id }) => (
            <li key={id}>
              <Link href={`/products/${id}`}>
                {title}
                {id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
