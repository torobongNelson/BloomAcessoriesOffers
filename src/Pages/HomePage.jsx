// import React from 'react'
import Hero from '../components/Hero';
import Homecards from '../components/HomeCards'
import OfferLists from '../components/OfferLists';
import ViewAll from '../components/ViewAll'
// import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <>
     {/* <Nav/> */}
     <Hero />
     <Homecards />
     <OfferLists  istrue={true}/>
     <ViewAll/>
    </> 
  );
};

export default HomePage