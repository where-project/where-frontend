import React from 'react'
import "../../css/Dashboard/dashboard.css"
import "../../css/style.css"
import "../../css/icon.css"
import Header from './Header'
import FavoritePlace from '../../pages/Favorite/FavoritePlace'

const Dashboard = () => {
    return (
        <main class="dashboard">
            <Header title={"My Favorite"} item={"The places you have added to your favorites are displayed."} />
            <FavoritePlace />
        </main>
    )
}

export default Dashboard