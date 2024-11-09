import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Start Learning Firebase</h1>
            <Link to="/login">Go to login page</Link>
        </div>
    );
};

export default Home;