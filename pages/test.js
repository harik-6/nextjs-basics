import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Layout from "../components/layout";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return <Layout>
    <Head>
      <title>Test</title>
    </Head>
    <h1>Hello Test!</h1>
    <p>Client side rendering page</p>
    <p>If you open the Network tab, you can see a http call to the url /posts</p>
    <p>Disabling the javascript in chrome tool won't change the data length to 100</p>
    <p>Data length {data.length}</p>
    <Link href="/" > Go back to home</Link>

  </Layout>
}