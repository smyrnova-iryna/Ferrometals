import { Link } from 'react-router-dom';



const FirstPage = ({data, handleToggle, navigateToTheTop}) => {
    return (
            <article className='First-Page-Main-Container'>
            <div className='First-Page-Button-Container'>
                    <button onClick={handleToggle} style={{zIndex: "82"}} className='FirstPage-Title-Button'>{data.home.firstPage.button}</button>
                    <Link to={data.menuPaths.catalog} style={{zIndex: "82"}} className='FirstPage-Title-Link' onClick={navigateToTheTop}>{data.home.firstPage.link}</Link>
            </div>   
            <svg className='First-Page-Svg' xmlns="http://www.w3.org/2000/svg" style={{fill:"url(#FirstDecorElementGradient)", position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="FirstDecorElementGradient">
                <stop offset="50%" stopColor="rgba(48,48,49,255)" />
                <stop offset="90%" stopColor="rgba(48,48,49,0.6)" />
                </linearGradient>
                <polygon points="0,0 677.43861977438,0 377.27272727273,550.76310550763 0,550.76310550763" />
                Sorry, your browser does not support inline SVG.
            </svg> 
            <div className='First-Page-Logo-Container'>
               <img className='First-Page-Logo' src={require("../img/full_logotype.png")} alt="Logotype"></img>
               <img className='First-Page-Logo-Text' src={require("../img/logotype_text.png")} alt="Logotype"></img>
               {/* <h1 className='First-Page-Logo-Text'>{data.home.firstPage.name}</h1> */}
               <p className='First-Page-Logo-Description'>{data.home.firstPage.description}</p>
            </div>
            {/* points="0,0 125,0 45,138 0,138" */}
            <svg style={{fill:"url(#SecondDecorElementGradient)", position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="SecondDecorElementGradient">
                <stop offset="30%" stopColor="rgba(20,172,147,255)" />
                <stop offset="90%" stopColor="rgba(13,94,114,0.6)" />
                </linearGradient>
                <polygon points="0,0 473.65627073656,0 649.900464499,308.42733908427 512.2096881221,550.76310550763 0,550.76310550763" />
                Sorry, your browser does not support inline SVG.
            </svg>

            {/* "0,0 0,118 75,118 101,48 62,0"  */}
            <svg style={{fill:"url(#ThirdDecorElementGradient)", position: "absolute", width: "100%", top: "0", right: "0", height: "100%"}}>
                <linearGradient id="ThirdDecorElementGradient">
                <stop offset="30%" stopColor="rgba(48,48,49,255)" />
                <stop offset="90%" stopColor="rgba(138,137,136,255)" />
                </linearGradient>
                <polygon points="0,523.22495023225 495.68679495687,523.22495023225 616.85467816855,749.03782349038 0,749.0378234903" />
                Sorry, your browser does not support inline SVG.
            </svg>
            <div className='First-Page-List-Container'>
                <ul className='First-Page-List'>
                    {data.home.firstPage.info.map( el =>
                            <li key={el} className='First-Page_List-Item'>
                                 <p className='First-Page-List-Item-Extra-Container'> <img className='First-Page-List-Gear-Icon' alt="Icon" src={require("../img/gear.png")}></img> <span className='First-Page-List-Item-Text'>{el}</span></p>
                            </li>
                    )}
                </ul>
            </div>
            </article>
    )
}

export default FirstPage;