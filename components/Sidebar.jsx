import React from "react";
import pages from "constants/pages";

class Sidebar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			loading: true
		};
	}

	render() {
		return (
			<div className="react-sidebar-container bg-dark">
				<ul>
					{
						pages.map((page, index) => (
							<li key={index}>
								<a className="react-sidebar__page-button">
									<div>
										<i className={page.icon} />
										<span>{page.name.en}</span>
									</div>
									{
										page.type == "menu" && (
											<i className="wb-chevron-down-mini" />
										)
									}
								</a>
								{
									page.type == "menu" && (
										<ul className="react-sidebar__menu">
											{
												page.menu.map((page, index)=> (
													<li key={index}>
														<a className="react-sidebar__menu-button">{page.name.en}</a>
													</li>
												))
											}
										</ul>
									)
								}
						
							</li>
						))
					}
				</ul>
			</div>
		);
	}

}

export default Sidebar;
