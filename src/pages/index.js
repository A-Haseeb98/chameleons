import React, { useRef, useState, useEffect } from 'react';
// import Head from 'next/head';
import Header from '../components/Header/Header';
import HeroArea from '../components/HeroArea/HeroArea';
import Countdown from '../components/Countdown/Countdown';
// import Minter from '../components/Minter/Minter';
import Intro from '../components/Intro/Intro';
import Space from '../components/Intro/Space';
import Xpace from '../components/Intro/Xpace';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import Features from '../components/Features/Features';
import RoadMap from '../components/RoadMap/RoadMap';
import Team from '../components/Team/Team';
import Founder from '../components/Team/Founder';
import Faqs from '../components/Faqs/Faqs';
import TheNewEraEmpireIsComing from '../components/TheNewEraEmpireIsComing/TheNewEraEmpireIsComing';
import Footer from '../components/Footer/Footer';
import RoadMapConclusion from '../components/RoadMapConclusion/RoadMapConclusion';
import Message from '../components/Message/Message';
import SneakPeek from '../components/SneakPeek/SneakPeek';
import Types from '../components/Types/Types';
import FeaturesReload from '../components/FeaturesReload/FeaturesReload';
import Impact from '../components/Impact/Impact';


export default function Home() {
  const [minterOn, setMinterOn] = useState(false);

  const topDiv = useRef();
  const introDiv = useRef();
  const featuresDiv = useRef();
  const impactDiv = useRef();
  const roadMapDiv = useRef();
  const teamDiv = useRef();
  const faqDiv = useRef();
  const bankDiv = useRef();
  const founderDiv = useRef();

  const topSection = () => {
    topDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const introSection = () => {
    introDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const featuresSection = () => {
    featuresDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const impactSection = () => {
    impactDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const roadMapSection = () => {
    roadMapDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const teamSection = () => {
    teamDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const founderSection = () => {
    founderDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const faqSection = () => {
    faqDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const cricketBankSection = () => {
    bankDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <section style={{ backgroundColor: '#263c25' }}>
        <Header
          introSection={introSection}
          featuresSection={featuresSection}
          roadMapSection={roadMapSection}
          teamSection={teamSection}
          founderSection={founderSection}
          faqSection={faqSection}
          topSection={topSection}
          cricketBankSection={cricketBankSection}
          impactSection={impactSection}
        />
        {/* até aqui deu boa */}
        <div className="custom_container">
          <section ref={introDiv}>
            <Space />
          </section>
          <section ref={introDiv}>
            <Xpace />
          </section>
          <section >
            <HeroCarousel />
          </section>
          {/* {minterOn ? <Minter /> : <Countdown setMinterOn={setMinterOn} />} */}
          <section ref={introDiv}>
            <Intro />
          </section>
          <section>
            <SneakPeek />
          </section>
          {/* <section>
            <HeroCarousel />
          </section> */}
          <section ref={featuresDiv}>
            {/* <Features /> */}
            <FeaturesReload />
          </section>
          <section ref={impactDiv}>
            <Impact />
          </section>
          <section ref={roadMapDiv}>
            <RoadMap />
          </section>
          <section ref={bankDiv}>
            <RoadMapConclusion />
          </section>
          <section ref={founderDiv}>
            <Founder />
          </section>
          <section>
            <Types />
          </section>
          <section ref={teamDiv}>
            <Team />
          </section>
          <br /><br />
          <Message />
          <section ref={faqDiv}>
            <Faqs />
          </section>
          <TheNewEraEmpireIsComing />
          <Footer />
        </div>
      </section>
    </div>
  );
}

