import { Link } from 'react-router-dom';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const BurgerMenuNav = ({data, changeHeaderBackground, navigateToTheTop, linkScroll}) => {
    
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='Burger-Menu-Button-Container'>
        <button className='Burger-Menu-Button' onClick={handleOpen}><MenuIcon /></button>
        <Backdrop
            sx={{ color: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <div className='Burger-Menu-Container'>
                <button className='Burger-Menu-Close-Button' onClick={handleClose}><CloseIcon/></button>
                <Link className='Nav-menu-item Burger-Menu-link' to={data.menuPaths.home} onClick={navigateToTheTop}>{data.menuItems.home}</Link>
                <Link className='Nav-menu-item Burger-Menu-link' to={data.menuPaths.about} onClick={navigateToTheTop}>{data.menuItems.about}</Link>
                    <Link  to={data.menuPaths.products} className='Nav-menu-item Dropdown-links-container Burger-Menu-link' 
                    onClick={linkScroll}>{data.menuItems.products}<ExpandMore/></Link>
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' 
                        to={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} onClick={linkScroll}>
                        {data.menuItems.transportingAndNearMachineEquipmentAndMachinesForWoodworking}</Link> 
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' to={data.menuPaths.equipmentForWasteProcessing} 
                        onClick={linkScroll}>{data.menuItems.equipmentForWasteProcessing}</Link>
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' to={data.menuPaths.roundWoodAccountingScanner} 
                        onClick={linkScroll}>{data.menuItems.roundWoodAccountingScanner}</Link>
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' to={data.menuPaths.polymerPaintingLines} onClick={linkScroll}>
                        {data.menuItems.polymerPaintingLines}</Link>
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' to={data.menuPaths.palletEquipment} onClick={linkScroll}>
                        {data.menuItems.palletEquipment}</Link>
                <Link className='Nav-menu-item Burger-Menu-link' to={data.menuPaths.catalog} onClick={linkScroll}>{data.menuItems.catalog}</Link>
                    <Link className='Nav-menu-item Dropdown-links-container Burger-Menu-link' to={data.menuPaths.gallery} onClick={linkScroll}>
                        {data.menuItems.gallery}<ExpandMore/></Link>
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' to={data.menuPaths.photo} onClick={linkScroll}>
                        {data.menuItems.photo}</Link> 
                        <Link className='Dropdown-link Burger-Menu-Dropdown-link' to={data.menuPaths.video} onClick={linkScroll}>
                        {data.menuItems.video}</Link>
                <Link className='Nav-menu-item Burger-Menu-link' to={data.menuPaths.contacts} onClick={navigateToTheTop}>{data.menuItems.contacts}
                </Link>
            </div>
        </Backdrop>
        </div>
    );
    }

export default BurgerMenuNav;