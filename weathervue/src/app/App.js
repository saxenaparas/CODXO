import React from "react";
import "./App.css";
import Head from 'next/head';
import Footer from "./components/footer";
import CurrentLocation from "./components/currentLocation";

function App() {
  return (
    <div className="reactfragment">
      <React.Fragment>
        <Head>
          <link rel="icon" href={process.env.PUBLIC_URL + '/favicon.ico'} />
        </Head>
        <div className="container">
          <CurrentLocation />
        </div>
        <center>
        <Footer />
        </center>
      </React.Fragment>
    </div>
  );
}

export default App;
