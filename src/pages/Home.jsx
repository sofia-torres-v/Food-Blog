import Header from "../components/Header/Header.jsx";
import MainContainer from "../components/MainContainer/MainContainer.jsx";
import Aside from "../components/Aside/Aside.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Home.css";
import PropTypes from "prop-types";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <MainContainer columns={2} />
                <Aside />
            </div>
            <Footer />
        </>
    );
};
MainContainer.propTypes = {
    columns: PropTypes.number.isRequired,
};

export default Home;
