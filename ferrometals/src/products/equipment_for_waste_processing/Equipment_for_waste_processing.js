
import "../products.css"

const EquipmentForWasteProcessing = ({data}) => {
    return (
        <section className="Standart-Section Product-Container Product-Background">
            <h3 className="Product-Heading">{data.equipmentForWasteProcessing.mainHeader}</h3>
            <article className="Product-Inner-Container">
                    <div className="Product-Item-Container">
                        <h5 className="Product-Item-Heading">{data.equipmentForWasteProcessing.pictures[0].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[0].picture}`)} alt={data.equipmentForWasteProcessing.pictures[0].captionText} />
                            <div className="Product-Description-Container">
                                {data.equipmentForWasteProcessing.pictures[data.equipmentForWasteProcessing.pictures[0].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                        <h5 className="Product-Item-Heading">{data.equipmentForWasteProcessing.pictures[1].header}</h5>
                        <div className="Product-Content-Container Product-Double-Content-Container" style={{backgroundColor: "var(--details-color)"}}>
                            <div className="Pellets-Images-Container">
                                <img className="Product-Image Pellet-Image Product-Double-Image" src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[1].picture}`)} alt={data.equipmentForWasteProcessing.pictures[1].captionText} />
                                <img className="Product-Image Pellet-Image Product-Double-Image" src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[2].picture}`)} alt={data.equipmentForWasteProcessing.pictures[2].captionText} />
                            </div>
                            <div className="Product-Description-Container">
                                {data.equipmentForWasteProcessing.pictures[data.equipmentForWasteProcessing.pictures[1].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
            </article>
            <div className="Product-Options-Container">
                <h4 className="Product-Options-Title">{data.booklets.equipmentForWasteProcessing.product}</h4>
                <img className="Product-Options-Image" alt={data.equipmentForWasteProcessing.mainHeader}
                src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[0].picture}`)}></img>
                {/* <a className="About-Product-Options-Button Product-Options-Button" href={require(`../../booklets/${data.booklets.equipmentForWasteProcessing.path}`)}  */}
                <a className="About-Product-Options-Button Product-Options-Button" href={require(`../../booklets/${data.booklets.polymerCoatingLines.path}`)} //Замінити
                        download={data.booklets.equipmentForWasteProcessing.title}>{data.booklets.title}</a>
            </div>

        </section>
    )
}

export default EquipmentForWasteProcessing;