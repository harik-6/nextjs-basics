import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Layout from "../components/layout";

export default function TestStaticProps({ data }) {
  return <Layout>
    <Head>
      <title>Test</title>
    </Head>
    <h1>Hello Test-static-props!</h1>
    <p>Statically generated page</p>
    <p>Server side rendering page</p>
    <p>If you open the Network tab, you can't see a http call to the url</p>
    <p>Disabling the javascript in chrome tool will still change the data length to 100</p>
    <p>Data length {data.length}</p>
    <Link href="/" > Go back to home</Link>
  </Layout>
}

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  return {
    props: {
      data
    }
  }
}