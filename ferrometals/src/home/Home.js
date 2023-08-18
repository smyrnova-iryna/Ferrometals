import "./home.css";
import FirstPage from "./FirstPage";

const Home = ({data, handleToggle, changeHeaderBackground, navigateToTheTop, currentViewportHeight, 
    currentViewportWidthIsLarger, currentViewportWidth}) => {
    return (
        <>
        <FirstPage data={data} handleToggle={handleToggle} changeHeaderBackground={changeHeaderBackground}
        navigateToTheTop={navigateToTheTop} currentViewportHeight={currentViewportHeight} 
        currentViewportWidthIsLarger={currentViewportWidthIsLarger} currentViewportWidth={currentViewportWidth} />
        </>
    )
}

export default Home;