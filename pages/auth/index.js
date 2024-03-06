import Auth from "@/components/Auth";
import Head from "next/head";

const AuthPage = () => {
  return (
    <div>
      <Head>
        <title>Qlearnz</title>
        <meta name="description" content="Online Platform for learning" />
      </Head>
      <Auth />
    </div>
  );
};

export default AuthPage;
