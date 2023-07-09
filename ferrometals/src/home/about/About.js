
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../home.css"

const About = ({data, linkScroll}) => {
    return (
        <section className="About-Main-Container">
            <article className="About-Container">
            <div className="About-Text-Container Top-Block-Part">
                <p className="About-Inner-Text">{data.about.mainText[0]}</p>
                <p className="About-Inner-Text">{data.about.mainText[1]}</p>
            </div>
            <div className="About-Photo-Container">
                {data.about.photos[0].map((item) => 
                            <img key={item} className="About-Picture" src={require(`../../data/photo/photo_about/${item}`)} alt={data.about.altText}></img>
                        )}
            </div>
            <div className="About-Photo-Container Extra-Photo-Container">
                {data.about.photos[1].map((item) => 
                            <img key={item} className="About-Picture" src={require(`../../data/photo/photo_about/${item}`)} alt={data.about.altText}></img>
                        )}
            </div>
            <div className="About-Text-Container Extra-Text-Container Center-Block-Part">
                <p className="About-General-Text About-Title">{data.about.mainText[2]}</p>
                <div className="About-List">
                    {data.about.listItems.map((item) => 
                        <p key={item} className="About-General-Text About-List-Item"><span>&#10004;</span><span> {item}</span></p>
                        // <img className='First-Page-List-Gear-Icon' alt="Icon" src={require("../../img/gear.png")}></img> 
                    )}
                </div>
            </div>
            <div className="About-Picture-Container">
                {/* <img className="About-Decoration" src={require(`../../img/ferrometals_decor.png`)} alt={data.about.altText}></img> */}
                <img className="About-Picture" src={require(`../../data/picture/picture_about/${data.about.pictures[1]}`)} alt={data.about.altText}></img>
                <img className="About-Picture Detailed-Picture" src={require(`../../data/picture/picture_about/${data.about.pictures[0]}`)} alt={data.about.altText}></img>
                <img className="About-Picture" src={require(`../../data/picture/picture_about/${data.about.pictures[2]}`)} alt={data.about.altText}></img>
            </div>
             <div className="About-Text-Container Options-Main-Container Bottom-Block-Part">
                <div className="About-Product-Options-Container">
                    <h4 className="About-Product-Options-Title">{data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.product}</h4>
                    <img className="About-Product-Options-Image" alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}
                    src={require(`../../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].picture}`)}></img>
                    <div className="About-Product-Options-Inner-Container">
                        <a className="About-Product-Options-Button" href={require(`../../booklets/${data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.path}`)} 
                        download={data.booklets.transportingAndNearMachineEquipmentAndMachinesForWoodworking.title}>{data.booklets.title}</a>
                        <Link className="About-Product-Options-Button" to={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} onClick={linkScroll}>{data.booklets.details}<ArrowForwardIosIcon /></Link>
                    </div>
                </div>
                <div className="About-Product-Options-Container">
                    <h4 className="About-Product-Options-Title">{data.booklets.equipmentForWasteProcessing.product}</h4>
                    <img className="About-Product-Options-Image" alt={data.equipmentForWasteProcessing.mainHeader}
                    src={require(`../../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[0].picture}`)}></img>
                    <div className="About-Product-Options-Inner-Container">
                        <a className="About-Product-Options-Button" href={require(`../../booklets/${data.booklets.equipmentForWasteProcessing.path}`)} 
                        download={data.booklets.equipmentForWasteProcessing.title}>{data.booklets.title}</a>
                        <Link className="About-Product-Options-Button" to={data.menuPaths.equipmentForWasteProcessing} onClick={linkScroll}>{data.booklets.details}<ArrowForwardIosIcon /></Link>
                    </div>
                </div>
                <div className="About-Product-Options-Container About-Last-Container">
                    <h4 className="About-Product-Options-Title">{data.booklets.roundWoodAccountingScanner.product}</h4>
                    <img className="About-Product-Options-Image" alt={data.roundWoodAccountingScanner.mainHeader}
                    src={require(`../../data/picture/picture_products/${data.roundWoodAccountingScanner.pictures[0].picture}`)}></img>
                    <div className="About-Product-Options-Inner-Container">
                        <a className="About-Product-Options-Button" href={require(`../../booklets/${data.booklets.roundWoodAccountingScanner.path}`)} 
                        download={data.booklets.roundWoodAccountingScanner.title}>{data.booklets.title}</a>
                        <Link className="About-Product-Options-Button" to={data.menuPaths.roundWoodAccountingScanner} onClick={linkScroll}>{data.booklets.details}<ArrowForwardIosIcon /></Link>
                    </div>
                </div>
                {/* <div className="About-Product-Options-Container ">
                    <h4 className="About-Product-Options-Title">{data.booklets.woodenPellets.product}</h4>
                    <img className="About-Product-Options-Image" alt={data.woodenPellets.mainHeader}
                    src={require(`../../data/photo/photo_wooden_pellets/${data.woodenPellets.photos[2].photo}`)}></img>
                    <div className="About-Product-Options-Inner-Container">
                        <a className="About-Product-Options-Button" href={require(`../../booklets/${data.booklets.woodenPellets.path}`)} 
                        download={data.booklets.woodenPellets.title}>{data.booklets.title}</a>
                        <Link className="About-Product-Options-Button"  to={data.menuPaths.woodenPellets} onClick={linkScroll}>{data.booklets.details}<ArrowForwardIosIcon /></Link>
                    </div>
                </div> */}
            </div>
        </article>
        </section>
    )
}

export default About;