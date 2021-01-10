import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-center bg-gray-100">
          <h1>This is index</h1>
        </div>
      </main>
      <style jsx>{`
      .container{
        width: 100%;
      }
      `}</style>
    </div>
  );
};

export default index;
