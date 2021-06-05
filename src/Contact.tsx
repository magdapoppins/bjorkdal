import React from 'react'
import vi from './images/lm.jpg'

const Contact = () => <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '6em'}}>
    <img src={vi} style={{borderRadius: '50%', height: '20em', width: '20em', objectFit: 'cover', objectPosition: '30%'}} alt={'Magdalena och Lilja'} />
    <h2>Hitta oss</h2>
    <p style={{textAlign: 'center'}}>   
        Magdalena och Lilja<br />
        Villa Björkdal<br />
        Tervsundsvägen 155<br />
        21600 Pargas<br />
        tel. 044 732 6385
    </p>
</div>

export default Contact