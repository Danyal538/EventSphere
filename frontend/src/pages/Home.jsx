import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import PopularEvents from '../components/PopularEvents'
import Suggestion from '../components/Suggestion'
import TrendingEvents from '../components/TrendingEvents'
import CreateEvent from '../components/CreateEvent'
import Subscription from '../components/Subscription'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <PopularEvents />
            <Suggestion />
            <TrendingEvents />
            <CreateEvent />
            <Subscription />
        </div>
    )
}

export default Home