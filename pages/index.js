import Hero from "@/components/Hero";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Qlearnz</title>
        <meta name="description" content="Online Platform for learning" />
      </Head>
      <Hero />
    </div>
  );
};

export default HomePage;
