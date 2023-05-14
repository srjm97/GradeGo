import SideNavBar from "../components/SideNavBar";
import React from "react";
import './dashboard.css'
import Dropdown from "../components/dropdown";
import HorizontalNavBar from '../components/horizontalnavbar';

function FacDashboard() {
    return (
        <div>
            <HorizontalNavBar />
            <SideNavBar />
            <Dropdown />
        </div>
    );
}

export default FacDashboard;