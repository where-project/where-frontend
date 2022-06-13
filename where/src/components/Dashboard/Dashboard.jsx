import React from 'react'
import "../../css/Dashboard/dashboard.css"
import "../../css/style.css"
import "../../css/icon.css"
import Header from './Header'
import FavoritePlace from '../../pages/Favorite/FavoritePlace'
import AddPlace from '../../pages/Place/AddPlace/AddPlace'

const Dashboard = ({ user, ...props }) => {

    return (
        <div>
            {
                user.role === 'ROLE_ADMIN' ?
                    <main class="dashboard">
                        <Header title={"Add Listing"} item={"You can add a place. Please do not forget to press the save buttons"} />
                        <AddPlace />
                    </main> :
                    <main class="dashboard">
                        <Header title={"My Favorite"} item={"The places you have added to your favorites are displayed."} />
                        <FavoritePlace />
                    </main>
            }
        </div>
    )
}

export default Dashboard