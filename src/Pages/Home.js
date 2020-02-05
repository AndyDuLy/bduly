import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import SideNavbar from '../Components/SideNavbar';
import Article_CrokiCurl from '../Images/Articles/crokicurl.jpg';
import Article_NuitBlanche from '../Images/Articles/nuitblanche.png';
import Article_ShoeBox from '../Images/Articles/shoeboxproj.jpg';


export default function Home() {
  return (
    <>
      <Hidden mdUp>
        <SideNavbar/>

        <Grid container className="topPadding" direction="row" justify="center" spacing={8}>
          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2019/10/04/guide-all-things-nuit-blanche-2019/"> 
              <img src={Article_CrokiCurl} width="320" height="250" alt=""/> 
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | October 4th, 2018 </span> <br/>
              <span className="headliner"> Guide: All things Nuit Blanche 2019 </span> <br/>
              <span className="excerptColor"> Night owls, early birds and art fanatics unite
                                              for the ultimate event this weekend! From
                                              dusk to dawn, Toronto’s largest immersive
                                              all-night art show will be returning for its
                                              14th year. </span>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2019/12/06/the-shoebox-project-community-hero-holiday-edition/">
              <img src={Article_NuitBlanche} width="320" height="250" alt=""/>
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | December 6th, 2019 </span> <br/>
              <span className="headliner"> The Shoebox Project - Community Hero: Holiday Edition </span> <br/>
              <span className="excerptColor"> The Shoebox Project is the inspiration
                                              behind what Michelle Melanson Cuperus
                                              did with Women Drawn Together, a
                                              networking and mentorship animation
                                              group, transforming empty shoeboxes
                                              into beautiful gifts, filled with little luxuries. </span>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2019/11/24/embracing-winter-the-gtas-first-ever-crokicurl-rink/">
              <img src={Article_ShoeBox} width="320" height="250" alt=""/>
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | November 26th, 2019 </span> <br/>
              <span className="headliner"> Embracing winter: the GTA’s first-ever crokicurl rink </span> <br/>
              <span className="excerptColor"> Is there anything more Canadian than
                                              staring winter in the face, going out, and
                                              just embracing it? There is now. </span>
            </p>
          </Grid>
        </Grid>
      </Hidden>


      <Hidden mdDown>
        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8}>
          <Grid item>
            <SideNavbar/>
          </Grid>

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2019/10/04/guide-all-things-nuit-blanche-2019/"> 
              <img src={Article_CrokiCurl} width="420" height="250" alt=""/> 
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | October 4th, 2018 </span> <br/>
              <span className="headliner"> Guide: All things Nuit Blanche 2019 </span> <br/>
              <span className="excerptColor"> Night owls, early birds and art fanatics unite
                                              for the ultimate event this weekend! From
                                              dusk to dawn, Toronto’s largest immersive
                                              all-night art show will be returning for its
                                              14th year. </span>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2019/12/06/the-shoebox-project-community-hero-holiday-edition/">
              <img src={Article_NuitBlanche} width="420" height="250" alt=""/>
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | December 6th, 2019 </span> <br/>
              <span className="headliner"> The Shoebox Project - Community Hero: Holiday Edition </span> <br/>
              <span className="excerptColor"> The Shoebox Project is the inspiration
                                              behind what Michelle Melanson Cuperus
                                              did with Women Drawn Together, a
                                              networking and mentorship animation
                                              group, transforming empty shoeboxes
                                              into beautiful gifts, filled with little luxuries. </span>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2019/11/24/embracing-winter-the-gtas-first-ever-crokicurl-rink/">
              <img src={Article_ShoeBox} width="420" height="250" alt=""/>
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | November 26th, 2019 </span> <br/>
              <span className="headliner"> Embracing winter: the GTA’s first-ever crokicurl rink </span> <br/>
              <span className="excerptColor"> Is there anything more Canadian than
                                              staring winter in the face, going out, and
                                              just embracing it? There is now. </span>
            </p>
          </Grid>
        </Grid>

      </Hidden>
    </>
  )
}
