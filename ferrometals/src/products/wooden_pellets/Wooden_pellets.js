import "../products.css"

const WoodenPellets = ({data}) => {
    return (
        <section className="Standart-Section Product-Container">
            <h3 className="Product-Heading">{data.woodenPellets.mainHeader}</h3>
            <article className="Product-Inner-Container">
                    <div className="Product-Item-Container">
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <div className="Pellets-Images-Container">
                                    {data.woodenPellets.photos.map((item) => 
                                    <img className="Pellet-Image" key={item.id} 
                                    src={require(`../../data/photo/photo_wooden_pellets/${item.photo}`)} 
                                    alt={item.captionText} />
                                )}
                            </div>
                            <div className="Product-Description-Container Pellet-Description">
                            {data.woodenPellets.parameters.map((item) => 
                                <p key={item.id} className="Product-Description">
                                    <span>{item.parameterName}</span>
                                    <span className="Product-Description-Value">{item.parameterValue}</span>
                                </p>
                            )}
                            </div>
                        </div>
                    </div>
            </article>
            <div className="Pellet-Options-Container">
                <h4 className="Product-Options-Title">{data.booklets.woodenPellets.product}</h4>
                <img className="Main-Products-Inner-Image Pellet-Booklet-Image" alt={data.woodenPellets.mainHeader}
                src={require(`../../data/photo/photo_wooden_pellets/${data.woodenPellets.photos[2].photo}`)}></img>
                {/* <img className="Product-Options-Image" alt={data.woodenPellets.mainHeader}
                src={require(`../../data/picture/picture_products/${data.woodenPellets.photos[0].photo}`)}></img> */}
                <a className="About-Product-Options-Button Product-Options-Button" href={require(`../../booklets/${data.booklets.woodenPellets.path}`)} 
                download={data.booklets.woodenPellets.title}>{data.booklets.title}</a>
            </div>
            {/* <div className="About-Text-Container">
                <a href={require(`../../booklets/${data.booklets.woodenPellets.path}`)} 
                download={data.booklets.woodenPellets.title}>{data.booklets.title}</a>
            </div> */}
        </section>
    )
}

export default WoodenPellets;