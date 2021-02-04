import Head from 'next/head';
import styles from '../styles/index.module.css';
import { useState } from 'react';

const Index = () => {
  //public statement
  const pClass = 'pfont';
  const [person, setPerson] = useState({ name: 'Austin', age: 23 });

  //function
  const forever21 = () => {
    setPerson({ name: 'Austin', age: 21 });
  };

  const oldFool = () => {
    setPerson({ name: 'Austin', age: 50 });
  }

  //render
  return (
    <div className={styles.gray}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{'body { background-color: #eeeeee; }'}</style>
      </Head>
      <main>
        <div className="bg-white max-w-sm rounded-lg overflow-hidden shadow-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
          <div>
            <p className="text-center m-1 font-black">Next.js Using index.js not app.js</p>
          </div>
          <div className={styles.infoBox + ' m-1'}>
            <p className={styles.red + ' text-lg'}>ROSE IS RED</p>
            <p className={pClass} lang="eng">
              Your name is {person.name}
            </p>
            <p>Your age is {person.age}</p>
            <button
              className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-1 px-1 border border-blue-600 rounded m-2"
              onClick={forever21}>
              I'm still young
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-1 px-1 border border-blue-600 rounded m-2"
              onClick={oldFool}>
              My back hurt
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
