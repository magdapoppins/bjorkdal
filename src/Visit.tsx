import React from 'react'
import blabar from './images/blabar.jpeg'

const Visit = () => <>
    <img src={blabar} alt={'Bild på en skog och en skylt där det står naturstig'} style={{height: '300px', width: '100%', objectFit: 'cover', objectPosition: '0 30%'}}/>
    <h1>Upplevelser i Åbolands skärgård</h1>
    <p>
        Åbolands skärgård är full av vacker natur och kulturupplevelser året runt.
    </p>
    <h2>Smultronställen i Pargas</h2>
    <ul>
        <li>Njut av brunch på <a href='https://www.cafehallonblad.fi/'>Cafe Hallonblad</a></li>
        <li>Boka en avslappnande stund på <a href='http://www.terapihornet.fi/'>Terapihörnet</a></li>
        <li>Basta och grilla korv</li>
        <li>Packa en piknikkorg och gör en utflykt till <a href='https://karta.pargas.fi/IMS/?mid=kdhf2'>Lillholmens badstrand</a></li>
        <li>Plocka en bukett från blomängen</li>
        <li>Gör en kajakutflykt kring Högen</li>
    </ul>
    <h2>Naturupplevelser i skärgården</h2>
    <p>
        För dig som gärna tar dig ut till skogs finns det många möjligheter i området.
        Vi har även en längre promenad på 5km och en kortare på kring 2km som startar från Björkdal.
        Du kan hitta fler rutter och kartor på <a href="https://www.pargas.fi/fi/web/pargas/luontopolut-ja-retkeilyreitit">Pargas stads sidor</a>.
    </p>
    <ul>
        <li>
            <a href="https://www.pargas.fi/documents/41921/0/SattmarkStigPolkuTrail_A3_Web+%281%29.pdf/dddcdc02-3f78-e2c5-0b99-4f5dbddf3939?t=1569935381970">Sattmark</a>
            , 5 km och 11 km
        </li>
        <li>
            <a href="https://www.pargas.fi/documents/41921/0/LenholmenStigPolkuTrail_A3_Web2+%281%29.pdf/1a879300-1b75-e8a7-e06c-ed220cb0b915?t=1569935395617">Lenholmen</a>
            , 1.2 km
        </li>
        <li>
            <a href="https://www.pargas.fi/documents/41921/0/Bl%C3%A5b%C3%A4rLingonStigPolkuTrail_A3_Web+%282%29.pdf/7db067c4-c226-444b-ae01-34e7aacd5d8a?t=1569935425923">Blåbärsstigen</a>
            , 2 km
        </li>
    </ul>
</>

export default Visit