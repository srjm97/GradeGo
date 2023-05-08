import React, { useState } from "react";
import './SideNavBar.css';

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "playground_assets/grid.svg",
		},
		{
			text: "Marks",
			icon: "playgrounds_assets/user.svg",
		},
		{
			text: "Attendance",
			icon: "playground_assets/message.svg",
		},
		{
			text: "Courses",
			icon: "playground_assets/pie-chart.svg",
		},
		{
			text: "Profile",
			icon: "playground_assets/user.svg",
		},

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
							<img src="playground_assets/Logo.svg" alt="" srcset="" />
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
							src="playground_assets/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Student</p>
							{/* <p className="nav-footer-user-position">store admin</p> */}
						</div>
					</div>
				)}
				<img className="logout-icon" src="playground_assets/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;
