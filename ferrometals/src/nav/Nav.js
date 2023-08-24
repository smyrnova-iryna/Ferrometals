import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';


const Nav = ({data, changeHeaderBackground, navigateToTheTop, linkScroll}) => {
   
    return (
        <nav className="Header-nav-container">
            <Link className='Nav-menu-item' to={data.menuPaths.home} onClick={navigateToTheTop}>{data.menuItems.home}</Link>
            <Link className='Nav-menu-item' to={data.menuPaths.about} onClick={navigateToTheTop}>{data.menuItems.about}</Link>
            <div className="w3-dropdown-hover">
                <Link  to={data.menuPaths.products} className='Nav-menu-item Dropdown-links-container' 
                onClick={linkScroll}>{data.menuItems.products}<ExpandMore/></Link>
                <div className="w3-dropdown-content w3-bar-block w3-card-4 Dropdown-Links-Inner-Container">
                    <Link className='Dropdown-link' to={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} 
                    onClick={linkScroll}>{data.menuItems.transportingAndNearMachineEquipmentAndMachinesForWoodworking}</Link> 
                    <br/>
                    <Link className='Dropdown-link' to={data.menuPaths.equipmentForWasteProcessing} onClick={linkScroll}>
                        {data.menuItems.equipmentForWasteProcessing}</Link>
                    <br/>
                    <Link className='Dropdown-link' to={data.menuPaths.roundWoodAccountingScanner} onClick={linkScroll}>
                        {data.menuItems.roundWoodAccountingScanner}</Link>
                    <br/>
                    <Link className='Dropdown-link' to={data.menuPaths.polymerPaintingLines} onClick={linkScroll}>
                        {data.menuItems.polymerPaintingLines}</Link>
                    <br/>
                    <Link className='Dropdown-link' to={data.menuPaths.palletEquipment} onClick={linkScroll}>{data.menuItems.palletEquipment}</Link>
                </div>
            </div>
            <Link className='Nav-menu-item' to={data.menuPaths.catalog} onClick={linkScroll}>{data.menuItems.catalog}</Link>
            <div className="w3-dropdown-hover ">
                <Link className='Nav-menu-item Dropdown-links-container' to={data.menuPaths.gallery} onClick={linkScroll}>
                    {data.menuItems.gallery}<ExpandMore/></Link>
                <div className="w3-dropdown-content w3-bar-block w3-card-4 Small-Dropdown-Links-Inner-Container">
                    <Link className='Dropdown-link' to={data.menuPaths.photo} onClick={linkScroll}>{data.menuItems.photo}</Link> 
                    <br/>
                    <Link className='Dropdown-link' to={data.menuPaths.video} onClick={linkScroll}>{data.menuItems.video}</Link>
                </div>
            </div>
            <Link className='Nav-menu-item' to={data.menuPaths.contacts} onClick={navigateToTheTop}>{data.menuItems.contacts}</Link>
        </nav>
    )
}

export default Nav;