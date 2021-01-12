import Head from 'next/head';
import styles from '../styles/index.module.css';

const index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-center">
          <p className="text-4xl">This is index</p>
          <p className={styles.red +' text-lg'}>This is Red Text</p>
        </div>
      </main>
    </div>
  );
};

export default index;
