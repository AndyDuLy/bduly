import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import SideNavbar from '../Components/SideNavbar';
import Article_CrokiCurl from '../Images/Articles/crokicurl.jpg';
import Article_NuitBlanche from '../Images/Articles/nuitblanche.png';
import Article_ShoeBox from '../Images/Articles/shoeboxproj.jpg';
import Article_BakeSale from '../Images/Articles/bakeSale.png';


export default function Home() {
  return (
    <>
      <Hidden mdUp>
        <SideNavbar/>

        <Grid container className="topPadding" direction="row" justify="center" spacing={8} id="Articles">
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

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2020/01/15/i-donated-from-my-piggy-bank-toronto-grade-two-student-hosts-bake-sale-for-australia/">
              <img src={Article_BakeSale} width="320" height="250" alt=""/>
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | January 15th, 2020 </span> <br/>
              <span className="headliner"> "I donated from my piggy bank": Toronto grade two student hosts bake sale for Australia </span> <br/>
              <span className="excerptColor"> Staff and students at Duke of Connaught Public School near Queen Street and Coxwell 
              teamed up to organize a school bake sale, to raise funds for Australia as devastating wildfires continue to rip 
              through the country. </span>
            </p>
          </Grid>

          <Grid item xs={10} md={3} id="Media">
            <iframe width="320" height="250" title="Toronto Christmas Market 2019"
              src="https://www.youtube.com/embed/6yJoaMrnP0E" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 2nd, 2019 </span> <br/>
              <span className="headliner"> Toronto Christmas Market 2019 </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="320" height="250" title="Nuit Blanche 2019"
              src="https://www.youtube.com/embed/ymy7L5SFYGc" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> October 19th, 2019 </span> <br/>
              <span className="headliner"> Nuit Blanche 2019 </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="320" height="250" title="Federal Election 2019"
              src="https://www.youtube.com/embed/GGRMpplQ7g8" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 2nd, 2019 </span> <br/>
              <span className="headliner"> Federal Election 2019 </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="320" height="250" title="Global Climate Strike 2019"
              src="https://www.youtube.com/embed/F82YJtv5Qdw" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> October 19th, 2019 </span> <br/>
              <span className="headliner"> Global Climate Strike 2019 </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3} id="OAR">
            <iframe 
              title="Soundcloud: Taste of Danforth" scrolling="no" frameborder="no" allow="autoplay" width="320" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550536&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 8th, 2019 </span> <br/>
              <span className="headliner"> Taste of Danforth </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Andreescu Effect" scrolling="no" frameborder="no" allow="autoplay" width="320" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> July 9th, 2019 </span> <br/>
              <span className="headliner"> Andreescu Effect </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Queen and Main Stabbing" scrolling="no" frameborder="no" allow="autoplay" width="320" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550551&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 10th, 2019 </span> <br/>
              <span className="headliner"> Queen and Main St. Stabbing </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Carnival Parade" scrolling="no" frameborder="no" allow="autoplay" width="320" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> March 8th, 2019 </span> <br/>
              <span className="headliner"> Report: Carnival Parade </span> <br/>
            </p>
          </Grid>
        </Grid>
      </Hidden>


      <Hidden mdDown>
        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8} id="Articles">
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

        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8}>
          <Grid item>
            <SideNavbar/>
          </Grid>

          <Grid item xs={10} md={3}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.680news.com/2020/01/15/i-donated-from-my-piggy-bank-toronto-grade-two-student-hosts-bake-sale-for-australia/">
              <img src={Article_BakeSale} width="420" height="250" alt=""/>
            </a>

            <p className="RalewayRegular">
              <span className="dateColor"> 680 NEWS | January 15th, 2020 </span> <br/>
              <span className="headliner"> "I donated from my piggy bank": Toronto grade two student hosts bake sale for Australia </span> <br/>
              <span className="excerptColor"> Staff and students at Duke of Connaught Public School near Queen Street and Coxwell 
              teamed up to organize a school bake sale, to raise funds for Australia as devastating wildfires continue to rip 
              through the country. </span>
            </p>
          </Grid>
        </Grid>

        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8} id="Media">
          <Grid item>
            <SideNavbar/>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="420" height="250" title="Toronto Christmas Market 2019"
              src="https://www.youtube.com/embed/6yJoaMrnP0E" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 2nd, 2019 </span> <br/>
              <span className="headliner"> Toronto Christmas Market 2019 </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="420" height="250" title="Nuit Blanche 2019"
              src="https://www.youtube.com/embed/ymy7L5SFYGc" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> October 19th, 2019 </span> <br/>
              <span className="headliner"> Nuit Blanche 2019 </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="420" height="250" title="Federal Election 2019"
              src="https://www.youtube.com/embed/GGRMpplQ7g8" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 2nd, 2019 </span> <br/>
              <span className="headliner"> Federal Election 2019 </span> <br/>
            </p>
          </Grid>
        </Grid>

        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8}>
          <Grid item>
            <SideNavbar/>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe width="420" height="250" title="Global Climate Strike 2019"
              src="https://www.youtube.com/embed/F82YJtv5Qdw" frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> October 19th, 2019 </span> <br/>
              <span className="headliner"> Global Climate Strike 2019 </span> <br/>
            </p>
          </Grid>
        </Grid>

        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8} id="OAR">
          <Grid item>
            <SideNavbar/>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Taste of Danforth" scrolling="no" frameborder="no" allow="autoplay" width="420" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550536&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 8th, 2019 </span> <br/>
              <span className="headliner"> Taste of Danforth </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Queen and Main Stabbing" scrolling="no" frameborder="no" allow="autoplay" width="420" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550551&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> December 10th, 2019 </span> <br/>
              <span className="headliner"> Queen and Main St. Stabbing </span> <br/>
            </p>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Andreescu Effect" scrolling="no" frameborder="no" allow="autoplay" width="420" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> July 9th, 2019 </span> <br/>
              <span className="headliner"> Andreescu Effect </span> <br/>
            </p>
          </Grid>
        </Grid>

        <Grid container className="topPadding" direction="row" justify="flex-start" spacing={8}>
          <Grid item>
            <SideNavbar/>
          </Grid>

          <Grid item xs={10} md={3}>
            <iframe 
              title="Soundcloud: Carnival Parade" scrolling="no" frameborder="no" allow="autoplay" width="420" height="250"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718550365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>

            <p className="RalewayRegular">
              <span className="dateColor"> March 8th, 2019 </span> <br/>
              <span className="headliner"> Report: Carnival Parade </span> <br/>
            </p>
          </Grid>
        </Grid>

      </Hidden>
    </>
  )
}
