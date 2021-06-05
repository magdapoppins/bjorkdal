import React from 'react'
import garden from './images/garden.jpeg'
import odling from './images/odling.jpeg'
import blommor from './images/blommor.jpg'
import berta from './images/berta.jpg'
import bastu from './images/bastu.jpeg'
import alfons from './images/alfons.jpeg'
import Chapter from './Chapter'

const Main = () => <>
    <img src={berta} alt={'Gården i solsken'} style={{height: '300px', width: '100%', objectFit: 'cover', objectPosition: '0 36%'}}/>
    <h1 style={{fontFamily: 'Parisienne', fontSize: '2.5em', textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: 'normal'}}>Välkommen till Björkdal!</h1>
    <Chapter 
        title={'Trädgården'} 
        content={`I vår trädgård växer allt från fruktträd och grönsaker till humle och potatis för vi strävar efter att odla det mesta av våra grönsaker själva.
        All kompost från köket hamnar genom bokashikomposten tillbaka till jorden. 
        Under trädgården finns vår egna vattenbrunn, därifrån får vi allt vårt vatten till hushållet.`} 
        image={blommor}
        altText={'Någon sår frön i en odlingslåda på vintern.'}
    />
    <Chapter 
        title={'Bastun'} 
        content={`På klippan i hörnet av gården finns den traditionella röda utebastun med palju, varav båda är veduppvärmda.
        I bastustugan finns ett gästrum, som går att hyra mellan maj och september.
        Gästrummet har en utbäddbar soffa för två och med fin utsikt mot skogen. 
        Den är perfekt för en romantisk getaway eller avkopplande helg med en kompis.`} 
        image={bastu}
        altText={'Bastun'}
        imageToRight
    />
    <Chapter 
        title={'Huset'} 
        content={`Vårt bostadshus är ett enplanshus byggt på 1960-talet som renoverats i flera omgångar sen dess. Vi är de fjärde invånarna i huset som nu är inrett i lantlig stil med mycket naturmaterial i inredningen. I huset finns ett gästrum som går att hyra året runt. 
        Det lantligt inredda gästrummet har en parsäng.`} 
        image={garden}
        altText={'Gården på en vinterdag.'}
    />
    <Chapter 
        title={'Djuren'} 
        content={`På gården bor katten Alfons, som håller möss och sorkar borta från huset.
        Alfons är väldigt snäll och älskar att bli klappad.
        I hönshuset bor fyra hönor - Majsan, Gunsan, Berta och Herkku, tillsammans med tupparna Elvira och Pöpö. De har en stor utehage, men får för det mesta strosa runt fria på gården. `} 
        image={alfons}
        altText={'Katten Alfons på gården.'}
        imageToRight
    />
</>

export default Main