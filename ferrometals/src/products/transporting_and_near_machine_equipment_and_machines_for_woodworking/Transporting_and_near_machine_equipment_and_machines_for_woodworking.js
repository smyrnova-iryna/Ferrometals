import "../products.css"

const TransportingAndNearMachineEquipmentAndMachinesForWoodworking = ({data}) => {
    return (
        <section className="Standart-Section Product-Container Product-Background">
            <h3 className="Product-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}</h3>
            <article className="Product-Inner-Container">
                {/* {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures.map((item) => 
                    <div className="Product-Item-Container" key={item.idGlobal}>
                        <h5 className="Product-Item-Heading">{item.header}</h5>
                        <div className="Product-Content-Container">
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${item.picture}`)} alt={item.captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[item.idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )} */}
                {/* CHANGE (MAP) */}
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[1].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[1].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--details-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[2].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[1].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[1].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[2].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[2].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[2].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[2].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[2].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[3].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[3].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--details-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[3].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[3].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[3].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[4].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[4].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[4].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[4].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[4].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container"  key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[5].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[5].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--details-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[5].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[5].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[5].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[6].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[6].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--main-background-color)"}}>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[6].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[6].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[6].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
                <div className="Product-Item-Container" key={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[7].idGlobal}>
                        <h5 className="Product-Item-Heading">{data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[7].header}</h5>
                        <div className="Product-Content-Container" style={{backgroundColor: "var(--details-color)"}}>>
                            <img className="Product-Image" src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[7].picture}`)} alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[7].captionText} />
                            <div className="Product-Description-Container">
                                {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[7].idGlobal].parameters.map((localItem) => 
                                    <p key={localItem.id} className="Product-Description">
                                        <span>{localItem.parameterName}</span>
                                        <span className="Product-Description-Value">{localItem.parameterValue}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                </div>
            {/* CHANGE (MAP) */}
            </article>
            <div className="Product-Options-Container">
                <h4 className="Product-Options-Title">{data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.product}</h4>
                <img className="Product-Options-Image" alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}
                src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].picture}`)}></img>
                <a className="About-Product-Options-Button Product-Options-Button" href={require(`../../booklets/${data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.path}`)} 
                download={data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.title}>{data.booklets.title}</a>
            </div>
            {/* <div className="About-Text-Container">
                <a href={require(`../../booklets/${data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.path}`)} 
                download={data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.title}>{data.booklets.title}</a>
            </div> */}
        </section>
    )
}

export default TransportingAndNearMachineEquipmentAndMachinesForWoodworking;

// <div key={localItem.id}>
//                                 <p>
//                                     <span>{localItem.parameterName}</span>
//                                     <span>{localItem.parameterValue}</span>
//                                 </p>
//                             </div>