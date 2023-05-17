import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello Home</h1>
      <p>Statically generated page</p>
      <Link href="/test" prefetch={true} > Test </Link>
      <br />
      <Link href="/test-static-props" prefetch={true} > Test static props </Link>
      <br />
      <Link href="/test-with-id" prefetch={true} > Test with dynamic id </Link>
    </>
  )
}