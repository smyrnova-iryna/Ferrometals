import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./products.css"

const Products = ({data, linkScroll}) => {
 return (
   <section className="Standart-Section Main-Products-Container">
    <h2 className="Main-Products-Title">{data.products.title}</h2>
    <div className="Main-Products-Inner-Container">
      <Link className="Main-Products-Inner-Link" 
      to={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} onClick={linkScroll}>
        <img className="Main-Products-Inner-Image" 
        alt={data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}
        src={require(`../data/picture/picture_products/${data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">
        {data.transportingAndNearMachineEquipmentAndMachinesForWoodworking.mainHeader}<ArrowForwardIosIcon />
        </button>
      </Link>
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.equipmentForWasteProcessing} 
      onClick={linkScroll}>
        <img className="Main-Products-Inner-Image" alt={data.equipmentForWasteProcessing.mainHeader}
        src={require(`../data/picture/picture_products/${data.equipmentForWasteProcessing.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.equipmentForWasteProcessing.mainHeader}<ArrowForwardIosIcon />
        </button>
      </Link>
    </div>
    <div className="Main-Products-Inner-Container">
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.roundWoodAccountingScanner} 
      onClick={linkScroll}>
        <img className="Main-Products-Inner-Image" alt={data.roundWoodAccountingScanner.mainHeader}
        src={require(`../data/picture/picture_products/${data.roundWoodAccountingScanner.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.roundWoodAccountingScanner.mainHeader}<ArrowForwardIosIcon />
        </button>
      </Link>
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.polymerPaintingLines} 
      onClick={linkScroll}>
        <img className="Main-Products-Inner-Image" alt={data.polymerPaintingLines.mainHeader}
        src={require(`../data/picture/picture_products/${data.polymerPaintingLines.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.polymerPaintingLines.mainHeader}<ArrowForwardIosIcon />
        </button>
      </Link>
      {/* <Link className="Main-Products-Inner-Link" to={data.menuPaths.palletEquipment} 
      onClick={linkScroll}>
        <img className="Main-Products-Inner-Image" alt={data.palletEquipment.mainHeader}
        src={require(`../data/picture/picture_products/${data.palletEquipment.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.palletEquipment.mainHeader}<ArrowForwardIosIcon />
        </button>
      </Link> */}
    </div>
    <div className="Main-Products-Inner-Container">
      <Link className="Main-Products-Inner-Link" to={data.menuPaths.palletEquipment} 
      onClick={linkScroll}>
        <img className="Main-Products-Inner-Image" alt={data.palletEquipment.mainHeader}
        src={require(`../data/picture/picture_products/${data.palletEquipment.pictures[0].picture}`)}></img>
        <button className="Main-Products-Inner-Button">{data.palletEquipment.mainHeader}<ArrowForwardIosIcon />
        </button>
      </Link>
    </div>

   </section>
 )
}

export default Products;