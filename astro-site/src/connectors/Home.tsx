import React from 'react';
import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar";
import Title from "../containers/Title";

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Title title="Home" />
            <div className="container bg-light-subtle m-auto">
                <h1 className="text-center p-5">Best City To Visit In Every United State In The Southeast Region</h1>
                <p className="p-sm-5">People want to travel, whether it be the weekends or any school/college/work breaks. Planning a trip, especially to the best cities in the US, can be daunting if you are not prepared. This site allows you to find the best attractions and hotels so that your trip will be pleasant.</p>
                <p className="p-sm-2">Go to the <a className="link-danger" href="/about">about</a> tab to go into what the site is actually about.</p>
                <p className="p-sm-2">The main tab <a className="link-danger" href="/cities">Cities</a> will actually redirect you to a pagination of the best cities in every state.</p>
                <p className="p-sm-2">If you are staying at a place for a few nights, the <a className="link-danger" href="/hotels">Hotels</a> tab will direct you to a page where the price-efficient hotels reside.</p>
                <p className="p-sm-2">Now some areas are near the ocean and have cruises available. To access the tab go to <a className="link-danger" href="/cruises">Cruises</a></p>
                <p className="p-sm-2">Otherwise, here are some restaurants based on the best areas. <a className="link-danger" href="/restaurants">Restaurants</a></p>
            </div>
            <Footer />
        </>
    );
}

export default Home;
