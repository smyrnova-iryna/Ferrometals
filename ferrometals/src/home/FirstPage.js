import { Link } from 'react-router-dom';


const FirstPage = ({data, handleToggle, navigateToTheTop, currentViewportHeight, currentViewportWidthIsLarger, 
currentViewportWidth}) => {
    return (
        <article className='First-Page-Main-Container' style={{minHeight: currentViewportHeight, padding: "0"}}>
            <div className='First-Page-Picture-Container' style={{height: `${currentViewportHeight*0.8}px`, marginLeft: 
            `${377.27272727273 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
            Number(currentViewportWidthIsLarger) / 2}px`, width: `${currentViewportWidth - (377.27272727273 / 746 * 
            currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2)}px`}}>
            </div>
            {/* height: `${currentViewportHeight*0.8}px` */}
            <div className='First-Page-Button-Container' style={{height: `${currentViewportHeight - currentViewportHeight*0.8 }px`, 
            top: `${currentViewportHeight*0.8}px`}}>
                    <button onClick={handleToggle} style={{zIndex: "95"}} className='FirstPage-Title-Button'>
                    {data.home.firstPage.button}
                    </button>
                    <Link to={data.menuPaths.catalog} style={{zIndex: "95"}} className='FirstPage-Title-Link' 
                    onClick={navigateToTheTop}>{data.home.firstPage.link}
                    </Link>
            </div>   
            <svg className='First-Page-Svg' xmlns="http://www.w3.org/2000/svg" style={{fill:"url(#FirstDecorElementGradient)", 
            position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="FirstDecorElementGradient">
                    <stop offset="50%" stopColor="rgba(48,48,49,255)" />
                    <stop offset="90%" stopColor="rgba(48,48,49,0.6)" />
                </linearGradient>
                <polygon points={`
                0,0 
                ${677.43861977438 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2},0 
                ${377.27272727273 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2}, ${550.76310550763 / 746 * currentViewportHeight}
                0,${550.76310550763 / 746 * currentViewportHeight}
                `} />
                Sorry, your browser does not support inline SVG.
            </svg> 
            {/* marginTop: `${550.76310550763 / 746 * currentViewportHeight / 20}px`, */}
            <div className='First-Page-Logo-Extra-Container' style={{height: `${550.76310550763 / 746 * currentViewportHeight}px`, 
            width: `${512.2096881221 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
            Number(currentViewportWidthIsLarger) / 2}px`}}>
                <div className='First-Page-Logo-Container' style={{maxHeight: `${550.76310550763 / 746 * currentViewportHeight}px`, 
                maxWidth: `${473.65627073656 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2}px`}}>
                    <img className='First-Page-Logo' style={{maxHeight: `${550.76310550763 / 746 * currentViewportHeight / 2.5}px`,
                    }} src={require("../img/full_logotype.png")} alt="Logotype"></img>
                    <img className='First-Page-Logo-Text' style={{maxWidth: `${473.65627073656 / 746 * currentViewportHeight - 
                    377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2 - 40}px`, maxHeight: 
                    `${550.76310550763 / 746 * currentViewportHeight / 8}px`}} src={require("../img/logotype_text.png")} 
                    alt="Logotype"></img>
                    <p className='First-Page-Logo-Description' style={{height: `${550.76310550763 / 746 * currentViewportHeight 
                    / 5}px`, width: `${473.65627073656 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight 
                    * Number(currentViewportWidthIsLarger) / 2 - 40}px, overflow: "hidden"`}}>{data.home.firstPage.description}</p>
                </div>
            </div>
            <svg className='First-Page-Svg' style={{fill:"url(#SecondDecorElementGradient)", position: "absolute", width: "100%", 
            top: "0", right: "0", height: "100%"}}>
                <linearGradient id="SecondDecorElementGradient">
                    <stop offset="30%" stopColor="rgba(20,172,147,255)" />
                    <stop offset="90%" stopColor="rgba(13,94,114,0.6)" />
                </linearGradient>
                <polygon points={`
                0,0 
                ${473.65627073656 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2},0 
                ${649.900464499 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2},${308.42733908427 / 746 * currentViewportHeight} 
                ${512.2096881221 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2},${550.76310550763 / 746 * currentViewportHeight} 
                0,${550.76310550763 / 746 * currentViewportHeight}
                `} />
                Sorry, your browser does not support inline SVG.
            </svg> 
            {/* "0,0 473.65627073656,0 649.900464499,308.42733908427 512.2096881221,550.76310550763 0,550.76310550763" */}
            {/* <svg className='First-Page-Svg' style={{fill:"url(#ThirdDecorElementGradient)", position: "absolute", width: "100%", 
            top: "0", right: "0", height: "100%", zIndex: "90"}}>
                <linearGradient id="ThirdDecorElementGradient">
                    <stop offset="30%" stopColor="rgba(48,48,49,255)" />
                    <stop offset="90%" stopColor="rgba(138,137,136,255)" />
                </linearGradient>
                <polygon points={`
                0,${523.22495023225 / 746 * currentViewportHeight} 
                ${495.68679495687 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2},${523.22495023225 / 746 * currentViewportHeight} 
                ${616.85467816855 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                Number(currentViewportWidthIsLarger) / 2},${749.03782349038 / 746 * currentViewportHeight} 
                0,${749.0378234903 / 746 * currentViewportHeight}
                `} />
                Sorry, your browser does not support inline SVG.
            </svg>  */}
            {/* "0,523.22495023225 495.68679495687,523.22495023225 616.85467816855,749.03782349038 0,749.0378234903" */}
            {/* <div className='First-Page-List-Container' style={{ top: `${523.22495023225 / 746 * currentViewportHeight}px`, 
            height: `${(749.0378234903 - 523.22495023225) / 746 * currentViewportHeight}px`, width: `${495.68679495687 / 746 * 
            currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2}px`}}>
                <svg className='First-Page-Svg' style={{fill:"url(#ThirdDecorElementGradient)", position: "absolute", width: "100%", 
            top: "0", right: "0", height: "100%", zIndex: "90"}}> */}
            <div className='First-Page-List-Container' style={{ top: `${523.22495023225 / 746 * currentViewportHeight}px`, 
            height: `${(749.0378234903 - 523.22495023225) / 746 * currentViewportHeight}px`, width: `${616.85467816855 / 746 * 
            currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * Number(currentViewportWidthIsLarger) / 2}px`}}>
                <svg className='First-Page-Svg' style={{fill:"url(#ThirdDecorElementGradient)", position: "absolute", width: "100%", 
                top: "0", right: "0", height: "100%", zIndex: "90"}}>
                    <linearGradient id="ThirdDecorElementGradient">
                        <stop offset="30%" stopColor="rgba(48,48,49,255)" />
                        <stop offset="90%" stopColor="rgba(138,137,136,255)" />
                    </linearGradient>
                    <polygon points={`
                    0,${(523.22495023225 - 523.22495023225) / 746 * currentViewportHeight} 
                    ${495.68679495687 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                    Number(currentViewportWidthIsLarger) / 2},${(523.22495023225 - 523.22495023225) / 746 * currentViewportHeight} 
                    ${616.85467816855 / 746 * currentViewportHeight - 377.27272727273 / 746 * currentViewportHeight * 
                    Number(currentViewportWidthIsLarger) / 2},${(749.03782349038  - 523.22495023225) / 746 * currentViewportHeight 
                    - 1.3} 
                    0,${(749.03782349038  - 523.22495023225) / 746 * currentViewportHeight - 1.3}
                    `} />
                    Sorry, your browser does not support inline SVG.
                </svg> 
                <ul className='First-Page-List' style={{zIndex: "95"}}>
                    {data.home.firstPage.info.map(el =>
                            <li key={el} className='First-Page_List-Item'>
                                 <p className='First-Page-List-Item-Text'>{el}</p> 
                             </li>
                    )}
                </ul> 
            </div>
            <div className='First-Page-Button-Container-Adaptive'>
                    <button onClick={handleToggle} style={{zIndex: "95", backgroundColor: "pink"}} className='FirstPage-Title-Button'>
                    {data.home.firstPage.button}
                    </button>
                    <Link to={data.menuPaths.catalog} style={{zIndex: "95"}} className='FirstPage-Title-Link' 
                    onClick={navigateToTheTop}>{data.home.firstPage.link}
                    </Link>
            </div> 
        </article>
    )
}

export default FirstPage;