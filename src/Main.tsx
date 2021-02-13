import React from 'react'
import garden from './images/garden.jpeg'

const Main = () => <>
    <img src={garden} alt={'Gården i solsken'} style={{height: '300px', width: '100%', objectFit: 'cover', objectPosition: '0 30%'}}/>
    <h1>Välkommen till Villa Björkdal!</h1>
    <p>
        Villa Björkdal är vårt hem på Stortervolandet i Pargas.
        Vi välkomnar även gäster runt året. 
    </p>
    <h2>Trädgården</h2>
    <p>
        I vår trädgård växer allt från fruktträd till humle och potatis och vi strävar efter att odla det mesta av våra grönsaker själva.
        Vi följer permakulturprinciper i våra odlingar.
        All kompost från köket hamnar även genom komposten tillbaka till jorden.
        Under trädgården finns även vår egna vattenbrunn, därifrån allt vatten i huset kommer.
    </p>
    <h2>Bastun</h2>
    <p>
        På klippan i hörnet av gården finns den traditionella röda utebastun med palju.
        Bastun och badtunnan är vedvärmdä - det gäller att ha tålamod!
        I bastustugan finns även ett gästrum, som går att hyra mellan Maj och September.
        Gästrummet har en utbäddbar soffa för två, mysiga vyer till skogen. 
        Den är perfekt för en romantisk getaway eller avkopplande helg med en kompis.
    </p>
    <h2>Huset</h2>
    <p>
        Det vita trähuset på gården är vårt hem. Där finns det även ett gästrum som går att hyra runt året. 
        Det lantligt inredda gästrummet har en parsäng.
    </p>
    <h2>Djuren</h2>
    <p>
        På gården bor katten Alfons, som håller reda på att skogsmöss och sorkar inte kommer för nära huset.
        Alfons är väldigt snäll och det går bra att hälsa på honom.
        Förutom katten finns även ett hönshus på gården. Vi väntar på att det första hönsgänget ska flytta in!
    </p>
</>

export default Main