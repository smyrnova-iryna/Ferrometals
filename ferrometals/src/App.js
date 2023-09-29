import { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Catalog from './catalog/Catalog';
import Products from './products/Products';
import TransportingAndNearMachineEquipmentAndMachinesForWoodworking from 
'./products/transporting_and_near_machine_equipment_and_machines_for_woodworking/Transporting_and_near_machine_equipment_and_machines_for_woodworking';
import EquipmentForWasteProcessing from './products/equipment_for_waste_processing/Equipment_for_waste_processing';
import RoundWoodAccountingScanner from './products/round_wood_accounting_scanner/Round_wood_accounting_scanner';
import PolymerPaintingLines from './products/polymer_painting_lines/Polymer_painting_lines';
import PalletEquipment from './products/pallet_equipment/Pallet_equipment';
import Gallery from './gallery/Gallery';
import VideoGallery from './gallery/video/VideoGallery';
import PhotoGallery from './gallery/photo/PhotoGallery';
import Contacts from './contacts/Contacts';
import Error from './error/Error';
import Header from './header-and-footer/Header';
import Footer from './header-and-footer/Footer';
import PrivacyPolicy from './header-and-footer/Privacypolicy';
import Address from './header-and-footer/Address';
import TopScroll from './header-and-footer/TopScroll';
import dataEn from "./data/dataEn";
import "./App.css"
import About from './home/about/About';

function App() {
  const [data, setData] = useState(dataEn);
  const changeLanguage = (currentData) => {
    setData(currentData);
  }

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  // const [contactsOpen, setContactsOpen] = useState(false);
  // const contactsHandleClose = () => {
  //   setOpen(false);
  // };
  // const contactsHandleToggle = () => {
  //   setOpen(!open);
  // };

  const [headerBackground, setHeaderBackground] = useState("");
  const changeHeaderBackground = () => {
    setHeaderBackground("headerBackgroundChange");
}

const [currentViewportHeight, setCurrentViewportHeight] = useState(window.innerHeight);
const [currentViewportWidth, setCurrentViewportWidth] = useState(window.innerWidth);
const [currentViewportWidthIsLarger, setCurrentViewportWidthIsLarger] = useState(false);
useLayoutEffect(() => {
  window.addEventListener('resize', (event) => {
    setCurrentViewportHeight(window.innerHeight);
    setCurrentViewportWidth(window.innerWidth);
    if (window.innerHeight >= window.innerWidth) {
      setCurrentViewportWidthIsLarger(true)
    } else {
      setCurrentViewportWidthIsLarger(false)
    }
  });
})

useEffect(() => {
  const handleScroll = event => {
    if(window.pageYOffset > 10) {
        setHeaderBackground("headerBackgroundChange");
    } else {
      setHeaderBackground("");
    }

  };
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
})

const navigateToTheTop = () => {
  window.scrollTo({top: 0})
}

const linkScroll = () => {
  window.scrollTo({top: 0})
}

  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} data={data} open={open} handleClose={handleClose} handleToggle={handleToggle} 
      setHeaderBackground={setHeaderBackground} changeHeaderBackground={changeHeaderBackground} navigateToTheTop={navigateToTheTop} 
      linkScroll={linkScroll}  headerBackground={headerBackground} />
      <Routes> 
        <Route path={data.menuPaths.home} element={<Home data={data} handleToggle={handleToggle} navigateToTheTop={navigateToTheTop} 
        linkScroll={linkScroll} currentViewportHeight={currentViewportHeight} currentViewportWidth={currentViewportWidth}
        currentViewportWidthIsLarger={currentViewportWidthIsLarger} />} />
        <Route path={data.menuPaths.about} element={<About data={data} linkScroll={linkScroll} />} />
        <Route path={data.menuPaths.catalog} element={<Catalog data={data} />} />
        <Route path={data.menuPaths.products} element={<Products data={data} linkScroll={linkScroll} />} />
        <Route path={data.menuPaths.transportingAndNearMachineEquipmentAndMachinesForWoodworking} 
        element={<TransportingAndNearMachineEquipmentAndMachinesForWoodworking data={data} />} />
        <Route path={data.menuPaths.equipmentForWasteProcessing} element={<EquipmentForWasteProcessing data={data} />} />
        <Route path={data.menuPaths.roundWoodAccountingScanner} element={<RoundWoodAccountingScanner data={data} />} />
        <Route path={data.menuPaths.polymerPaintingLines} element={<PolymerPaintingLines data={data} />} />
        <Route path={data.menuPaths.palletEquipment} element={<PalletEquipment data={data} />} />
        <Route path={data.menuPaths.gallery} element={<Gallery data={data} linkScroll={linkScroll} />} />
        <Route path={data.menuPaths.video} element={<VideoGallery data={data} />} />
        <Route path={data.menuPaths.photo} element={<PhotoGallery data={data} />} />
        <Route path={data.menuPaths.contacts} element={<Contacts data={data} currentViewportHeight={currentViewportHeight} 
        currentViewportWidthIsLarger={currentViewportWidthIsLarger} currentViewportWidth={currentViewportWidth}  />} />
        <Route path={data.menuPaths.privacypolicy} element={<PrivacyPolicy data={data} />} />
        <Route path={data.menuPaths.address} element={<Address data={data} />} />
        <Route path={data.errorPath} element={<Error data={data} />} />
      </Routes>
      <TopScroll /> 
      <Footer data={data} changeHeaderBackground={changeHeaderBackground} linkScroll={linkScroll} 
      navigateToTheTop={navigateToTheTop} open={open} handleClose={handleClose} handleToggle={handleToggle}/> 
    </div>
  );
}

export default App;