import React from "react";
import NextApp from "next/app";
import Dropdown from "components/Dropdown";
import "../styles/globals.scss";

class App extends NextApp {

	render() {

		return (
			<nav className="navbar expand-sm navbar-dark bg-dark box-shadow">
				<div className="container-fluid">
					<div className="znek_navbar">
						<a className="navbar-brand">
							Developer Tools
						</a>
						<div className="navbar-menu">
							<div className="left">
								<button className="btn btn-link">
									<i className="fa fa-bars" />
								</button>
							</div>
							<div className="right">
								<ul className="nav nav-pills">
									<li className="nav-item">
										<Dropdown
											label={
												<i className="fa fa-language" />
											}
										>
											<ul>
												<li><a>Link 1</a></li>
												<li><a>Link 2</a></li>
												<li><a>Link 3</a></li>
											</ul>
										</Dropdown>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}

}

export default App;
