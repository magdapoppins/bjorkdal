import styled from '@emotion/styled'
import React from 'react'
import alfons from './images/alfons.jpeg'
import garden from './images/garden.jpeg'

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