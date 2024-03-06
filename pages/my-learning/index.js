import MyLearning from "@/components/MyLearning";
import Head from "next/head";

const MyLearningPage = () => {
  return (
    <div>
      <Head>
        <title>Qlearnz: My Learning</title>
        <meta name="description" content="Online Platform for learning" />
      </Head>
      <MyLearning />
    </div>
  );
};

export default MyLearningPage;
