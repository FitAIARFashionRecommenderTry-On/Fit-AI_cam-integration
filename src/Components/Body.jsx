import React from 'react'
import { Header } from './Header';
import { Headerend } from './Header-end'
// import { Firstcard } from './Firstcard';
// import { SecondCard } from './SecondCard';
// import { ThirdCard } from './ThirdCard';
import { Get4Hours } from './Get4Hours';
import { Products } from './Products';
import { FavProducts } from './FavProducts';
// import { Just_in_spring } from './Just_in_spring';
import { Cashback } from './Cashback'
import { Products2 } from './Products2'
import { For_U } from './For_U';
import { Inseason } from './Inseason';
import { HomeFurniture } from './HomeFurniture';
import { Covid19 } from './Covid19';
import { SharingValues } from './Sharing_values';
import { Feedback } from './Feedback';
import {Footer} from './Footer'
// import { Perheader } from './Per_header';
// import { Feedback } from './Feedback';
// import { Footer } from './Footer';
export const Body = () => {
  return (
    <div>
      {/* <Header /> */}
        <Headerend />
            {/* <div style={{display:'flex',flexDirection:'row',alignContent:'flex-end'}}>
                <Firstcard />
                <SecondCard />
                <ThirdCard />
            </div> */}
        <Get4Hours />
        <Products />
        <FavProducts />
        {/* <Just_in_spring /> */}
        <Cashback />
        <Products2 />
        <For_U />
        <Inseason />
        <HomeFurniture />
        <Covid19 />
        <SharingValues />
        <Feedback />
        <Footer />

    </div>
  )
}