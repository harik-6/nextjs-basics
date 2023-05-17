import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function TestStaticProps({ data }) {
  return <>
    <Head>
      <title>Test</title>
    </Head>
    <h1>Hello Test-static-props with dynamic id!</h1>
    <p>Statically generated page</p>
    <p>Server side rendering page</p>
    <p>If you open the Network tab, you can't see a http call to the url</p>
    <p>Any console logs will be in the terminal as it is the server</p>
    <p>Data length {data.length}</p>
    <p>Post title: {data.title}</p>
    <p>Post body: {data.body}</p>
    <p>Post id: {data.id}</p>
    <Link href="/test-with-id" > Go back to post index page</Link>
    <br />
    <Link href="/" > Go back to home</Link>
  </>
}

export async function getStaticProps({ params }) {
  console.log("calling getStaticProps in the main test-with-id dynamic page")
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + params.id);
  const data = res.data;
  return {
    props: {
      data
    }
  }
}

export async function getStaticPaths() {
  console.log("calling getStaticPaths in the main test-with-id dynamic page")
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = res.data;
  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
  // console.log("Possible paths", paths);
  return {
    paths,
    fallback: false
  }
}