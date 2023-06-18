import "./home.css";
import FirstPage from "./FirstPage";

const Home = ({data, handleToggle, changeHeaderBackground, gearSpin, navigateToTheTop}) => {
    return (
        <>
        <FirstPage data={data} handleToggle={handleToggle} changeHeaderBackground={changeHeaderBackground} gearSpin={gearSpin} navigateToTheTop={navigateToTheTop} />
        </>
    )
}

export default Home;