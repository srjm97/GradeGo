import SideNavBar from "../components/SideNavBar";
import React from "react";
import './dashboard.css'
import HorizontalNavBar from '../components/horizontalnavbar'

function FacDashboard() {
    return (
        <div>
            <HorizontalNavBar />
            <SideNavBar />
        </div>
    );
}

export default FacDashboard;