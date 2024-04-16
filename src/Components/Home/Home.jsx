import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CR | Home</title>
            </Helmet>
            <Banner />
            <Facilities></Facilities>
        </div>
    );
};

export default Home;