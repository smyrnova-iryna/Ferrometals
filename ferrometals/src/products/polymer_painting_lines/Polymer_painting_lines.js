import "../products.css"

const PolymerPaintingLines = ({data}) => {
    return (
        <section className="Standart-Section Product-Container">
            <h3 className="Product-Heading">{data.polymerPaintingLines.mainHeader}</h3>
            <article className="Product-Info-Container">
                <div className="Product-First-Info-Container">
                    <img className="Scaner-Image" 
                    src={require(`../../data/picture/picture_products/${data.polymerPaintingLines.mainPicture.picture}`)} 
                    alt={data.polymerPaintingLines.mainPicture.captionText} />
                    <p className="Scaner-Text Painting-Lines-Main-Text">{data.polymerPaintingLines.mainText}</p>
                </div>
                <div className="Scaner-Decorated-Left-Text-Container">
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalTitleText}</p> <br/>
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[0].header}</p>
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[0].subHeader}</p>
                    {data.polymerPaintingLines.internalBlocksText[0].blockText.map((item) => 
                        <p className="Scaner-Decorated-Left-Text Painting-Lines-List" key={item}>
                            <span className="About-List-Item-Marker">&#10004; </span>{item}
                        </p>)}
                </div>
                <div className="About-Photo-Main-Container Painting-Lines-Photo-Main-Container">
                    <div className="About-Photo-Container Painting-Lines-Photo-Container">
                                <img className="About-Picture" 
                                src={require(`../../data/picture/picture_products/${data.polymerPaintingLines.decorationPictures[0].picture}`)} 
                                alt={data.polymerPaintingLines.decorationPictures[0].captionText}></img>
                                <img className="About-Picture Painting-Lines-Photo" 
                                src={require(`../../data/picture/picture_products/${data.polymerPaintingLines.decorationPictures[1].picture}`)} 
                                alt={data.polymerPaintingLines.decorationPictures[1].captionText}></img>
                    </div>
                </div>
                <div className="Scaner-Decorated-Left-Text-Container">
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[1].header}</p>
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[1].subHeader}</p>
                    {data.polymerPaintingLines.internalBlocksText[1].blockText.map((item) => 
                        <p className="Scaner-Decorated-Left-Text" key={item}>
                            <span className="About-List-Item-Marker Painting-Lines-List">&#10004; </span>{item}
                        </p>)}
                </div>
                <div className="About-Photo-Main-Container Painting-Lines-Photo-Main-Container">
                    <div className="About-Photo-Container Painting-Lines-Photo-Container">
                                <img className="About-Picture" 
                                src={require(`../../data/picture/picture_products/${data.polymerPaintingLines.decorationPictures[2].picture}`)} 
                                alt={data.polymerPaintingLines.decorationPictures[2].captionText}></img>
                                <img className="About-Picture" 
                                src={require(`../../data/picture/picture_products/${data.polymerPaintingLines.decorationPictures[3].picture}`)} 
                                alt={data.polymerPaintingLines.decorationPictures[3].captionText}></img>
                    </div>
                </div>
                <div className="Scaner-Decorated-Left-Text-Container">
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[2].header}</p>
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[2].subHeader}</p>
                    {data.polymerPaintingLines.internalBlocksText[2].blockText.map((item) => 
                        <p className="Scaner-Decorated-Left-Text Painting-Lines-List" key={item}>
                            <span className="About-List-Item-Marker">&#10004; </span>{item}
                        </p>)}
                </div>
                <div className="Scaner-Decorated-Left-Text-Container">
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[3].header}</p>
                    <p className="Scaner-Decorated-Left-Text">{data.polymerPaintingLines.internalBlocksText[3].subHeader}</p>
                    {data.polymerPaintingLines.internalBlocksText[3].blockText.map((item) => 
                        <p className="Scaner-Decorated-Left-Text Painting-Lines-List" key={item}>
                            <span className="About-List-Item-Marker">&#10004; </span>{item}
                        </p>)}
                </div>
            </article>
            <article className="Product-Inner-Container">
                {data.polymerPaintingLines.pictures.map((item) => 
                    <div className="Product-Item-Container" key={item.idGlobal}>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${item.picture}`)} 
                            alt={item.captionText} />
                            <div className="Product-Description-Container">
                                {data.polymerPaintingLines.pictures[item.idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </article>
            <div className="Product-Options-Container">
                <h4 className="Product-Options-Title">{data.booklets.polymerPaintingLines.product}</h4>
                <img className="Product-Options-Image" alt={data.polymerPaintingLines.mainHeader}
                src={require(`../../data/picture/picture_products/${data.polymerPaintingLines.pictures[0].picture}`)}></img>
                <a className="About-Product-Options-Button Product-Options-Button" href={require(`../../booklets/${data.booklets.polymerPaintingLines.path}`)} 
                download={data.booklets.polymerPaintingLines.title}>{data.booklets.title}</a>
            </div>
            {/* <div className="About-Text-Container">
                <a href={require(`../../booklets/${data.booklets.polymerPaintingLines.path}`)} 
                download={data.booklets.polymerPaintingLines.title}>{data.booklets.title}</a>
            </div> */}
        </section>
    )
}

export default PolymerPaintingLines;