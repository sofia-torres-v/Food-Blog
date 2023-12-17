import Header from "../components/Header/Header.jsx";
import MainContainer from "../components/MainContainer/MainContainer.jsx";
import Aside from "../components/Aside/Aside.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PropTypes from "prop-types";
// import "./Post.css";

const Post = () => {
    return (
        <>
            <Header />
            <div className="container">
                <MainContainer columns={1} />
                <Aside />
            </div>
            <Footer />
        </>
    );
};

MainContainer.propTypes = {
    columns: PropTypes.number.isRequired,
};

export default Post;
