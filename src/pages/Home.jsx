import Header from "../components/Header/Header.jsx";
import Section from "../components/Section/Section.jsx";
import Aside from "../components/Aside/Aside.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Section />
                <Aside />
            </div>
            <Footer />
        </>
    );
};

export default Home;
