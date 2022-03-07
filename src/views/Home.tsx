import React from 'react';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <Grid />
      </Main>
    </>
  );
}

export default Home;
