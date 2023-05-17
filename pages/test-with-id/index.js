import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function TestStaticProps({ ids }) {
  return <>
    <Head>
      <title>Test</title>
    </Head>
    <h1>This page is getting rendered in the server </h1>
    <h1>All the console statements are in the server  </h1>
    <Link href="/" > Go back to home</Link>
    <br />
    {
      ids.map((item) => {
        const url = "/test-with-id/" + item;
        return <>
          <Link key={url} href={url} > Link to post {item}</Link>
          <br key={url} />
        </>
      })
    }
  </>
}


export async function getStaticProps() {
  console.log("calling getStaticProps in the main test-with-id page")
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  const ids = data.map((item) => item.id);
  return {
    props: {
      ids
    }
  }
}