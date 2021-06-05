import styled from '@emotion/styled'
import React from 'react'
import alfons from './images/alfons.jpeg'
import garden from './images/garden.jpeg'
import odling from './images/odling.jpeg'
import havet from './images/havet.jpeg'
import frulle from './images/frulle.jpeg'
import vardags from './images/vardags.jpeg'
import vi from './images/vi.jpeg'

const GalleryPic = styled('img')`
    width: 300px;
    height: 300px;
    object-fit: cover;
`
const galleryImages = [
    {
        'image': alfons,
        'alt': 'Foto på en orange katt på gården',
        'text': 'Katten Alfons ute på musjakt, Februari 2021'
    },
    {
        'image': garden,
        'alt': 'Ett vitt trähus med en röd mindre stuga och ett grönsaksland',
        'text': 'Solig lördag på gården, Februari 2021'
    },
    {
        'image': odling,
        'alt': 'Någon sår frön i en odlingslåda',
        'text': 'Vintersådd av morötter på gården, Januari 2021'
    },
    {
        'image': havet,
        'alt': 'Fina vintriga vyer ut på havet i Tervsund',
        'text': 'Vintrigt på stranden i Tervsund. Januari 2021'
    },
    {
        'image': vi,
        'alt': 'Magda och Lilja på en utflykt i skogen. Varmt te i termosen!',
        'text': 'Magda och Lilja på en utflykt i skogen. Varmt te i termosen! December 2020'
    },
    {
        'image': vardags,
        'alt': 'Solen skiner in i vardagsrummet',
        'text': 'Solen skiner in i vardagsrummet. Februari 2021'
    }
]

const PictureCard: React.FC<{image: string, alt: string, text: string}> = ({image, alt, text}) => <div style={{padding: '8px', width: '300px', margin: '0px', float: 'left'}}>
    <GalleryPic src={image} alt={alt} />
    <span>{text}</span>
</div>

const Gallery = () => <div style={{width: 'inherit'}}>
    {galleryImages.map(i => <PictureCard key={i.image} image={i.image} alt={i.alt} text={i.text} />)}
</div>


export default Gallery;