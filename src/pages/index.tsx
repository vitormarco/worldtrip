import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main, Banner } from '../template';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <h1>hello</h1>
      </Main>
    </>
  );
};

export default Home;
