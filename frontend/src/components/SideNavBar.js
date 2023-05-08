import React, { useState } from "react";
<<<<<<< Updated upstream

import './SideNavBar.css';
=======
import "./SideNavBar.css";
>>>>>>> Stashed changes

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
<<<<<<< Updated upstream
			icon: "playground_assets/dashboard.svg",
		},
		{
			text: "Marks",
			icon: "playgrounds_assets/dashboard.svg",
		},
		// {
		// 	text: "Attendance",
		// 	icon: "playground_assets/message.svg",
		// },
		// {
		// 	text: "Courses",
		// 	icon: "playground_assets/pie-chart.svg",
		// },
		// {
		// 	text: "Profile",
		// 	icon: "playground_assets/user.svg",
		// },

=======
			icon: "icons/grid.svg",
		},
		{
			text: "Marks",
			icon: "icons/user.svg",
		},
		{
			text: "Attendance",
			icon: "icons/message.svg",
		},
		{
			text: "Courses",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "Profile",
			icon: "icons/user.svg",
		},
		
>>>>>>> Stashed changes
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>GradeGo</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Student</p>
							{/* <p className="nav-footer-user-position">store admin</p> */}
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;
