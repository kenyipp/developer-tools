import React from "react";
import Head from "next/head";
import NextApp from "next/app";
import Dropdown from "components/Dropdown";
import ReactSidebar from "react-sidebar";
import { autobind } from "react-decoration";
import classnames from "classnames";

import Sidebar from "components/Sidebar";

import "../styles/globals.scss";

class App extends NextApp {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	@autobind
	onSetSidebarOpen(open) {
		this.setState({ open });
	}

	render() {

		const {
			open
		} = this.state;

		const {
			Component,
			pageProps,
			store
		} = this.props;

		return (
			<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				</Head>
				<nav className="navbar expand-sm navbar-dark bg-dark">
					<div className="znek_navbar">
						<a className="navbar-brand">
							Developer Tools
						</a>
						<div className="navbar-menu">
							<div className="left">
								<button
									className="btn btn-link"
									onClick={() => this.onSetSidebarOpen(!open)}
								>
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
												<li><a className="dropdown-item">Link 1</a></li>
												<li><a className="dropdown-item">Link 2</a></li>
												<li><a className="dropdown-item">Link 3</a></li>
											</ul>
										</Dropdown>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				<main className="app__container">
					<ReactSidebar
						sidebar={<Sidebar />}
						open={open}
						onSetOpen={this.onSetSidebarOpen}
						shadow={false}
						overlayClassName="react-sidebar-overlay"
						contentClassName={classnames("react-sidebar__content", open ? "react-sidebar__content-open" : "react-sidebar__content-close")}
					>
						<Component {...pageProps} />
					</ReactSidebar>
				</main>
			</>
		);
	}

}

export default App;
