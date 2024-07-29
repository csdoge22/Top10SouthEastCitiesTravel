import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar";
import Title from "../containers/Title";



const Home = () => {
    return (
        <>
            <Navbar />
            <Title title="Home"/>
            <div className="container bg-light-subtle m-auto">
                <h1 className="text-center p-5">Best City To Visit In Every Southeast Region United State</h1>
                <p className="p-sm-5">People want to travel, whether it be the weekends or any school/college/work breaks. Planning a trip
                    , especially to the best cities in the US can be daunting if you are not prepared. This site allows
                    you to find the best attractions and hotels so that your trip will be pleasant.
                </p>
            </div>
            <Footer />
        </>
    )
}
export default Home;