const Chapter: React.FC<{title: string, content: string, image: string, altText: string, imageToRight?: boolean}> = ({title, content, image, altText, imageToRight}) => <div style={{display: 'flex'}}>
    {imageToRight ?
    <>
        <div style={{paddingRight: '2em'}}>
            <h2>{title}</h2>
            <p>
                {content}
            </p>
        </div>
        <div>
            <img style={{width: '30em'}} src={image} alt={altText}></img>
        </div>
    </> : 
    <>
        <div>
            <img style={{width: '30em'}} src={image} alt={altText}></img>
        </div>
        <div style={{paddingLeft: '2em'}}>
            <h2>{title}</h2>
            <p>
                {content}
            </p>
        </div>
    </>}
</div>;

export default Chapter;
