import React from "react";
import {Navbar, Billing, CardDeal, Business, Client, CTA, Stats, Testimonials, Footer, Hero} from './components/index'
// import style from "./style";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing /> 
        <CardDeal /> 
        <Testimonials /> 
        <Client /> 
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
