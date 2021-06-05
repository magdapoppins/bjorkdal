import React from 'react'
import bastu from './images/bastu.jpeg'

const Accommodation = () => <>
    <h1>Övernatta på Björkdal</h1>
    <p>
        På gården har du en möjlighet att hyra rum för en till tre gäster. 
        Alla gäster är välkomna att använda köket och badrummet i huset.
        Hör av er ifall det skulle finnas något ni undrar om angående våra rum.
        Ifall ni önskar att bada bastu eller badtunna, skriv det när ni bokar så värmer vi upp dem för er!
    </p>
    <img src={bastu} style={{width: '100%', height: '400px', objectFit: 'cover'}} alt="Bastu" />
    <h2>Bastustugan</h2>
    <ul>
        <li>Rum för två gäster med egen lugn och ro.</li>
        <li>El, utbäddbar dubbelsäng, mysigt bord för frukost (vi hämtar frukostbrickan till bastutrappan).</li>
        <li>Rummet erbjuds från April till September.</li>
    </ul>
    <h2>Rum nummer 4</h2>
    <ul>
        <li>Rum för två gäster inne i huvudbyggnaden.</li>
        <li>Dubbelsäng.</li>
        <li>Frukost serveras i matsalen eller på terassen av huset.</li>
        <li>Rummet erbjuds året runt.</li>
        <li>Katten Alfons bor i samma byggnad.</li>
    </ul>
</>


export default Accommodation;
