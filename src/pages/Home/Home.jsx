import React from 'react';
import wandaBanner from '../../assets/wandavisionposter.jpg';
import Styles from './home.module.scss'

export default function Home() {

    const sectionBanner={
      width: "100%",
      height: "360px",
      backgroundImage: `url(${wandaBanner})`
    }


    return (
      <>
      <section style={sectionBanner}>
        <div className={Styles.sectionContainer}>
          <div classname={Styles.bannerContent}>
            <div className={Styles.title}>
              <h2>Bem-Vindo(a).</h2>
              <h3>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h3>
            </div>
          </div>
        </div>
      </section>
      
      </>
    );
}

