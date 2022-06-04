import React from "react";
import pages from "constants/pages";
import { autobind } from "react-decoration";
import Link from "next/link";
import autoAnimate from "@formkit/auto-animate";

class Sidebar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: null
		};
	}

	render() {

		const {
			selected
		} = this.state;

		return (
			<div className="react-sidebar-container bg-dark">
				<ul>
					{
						pages.map((page, index) => (
							<li key={index}>

								<Link href={page.type == "page" ? page.path[0] : "#"}>
									<a
										className="react-sidebar__page-button"
										onClick={() => {
											if (page.id) {
												this.setState({ selected: page.id == selected ? null : page.id })
											} else {
												this.props.onClose();
											}
										}}
									>
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
								</Link>

								{
									page.type == "menu" && (
										<ul
											className="react-sidebar__menu"
											style={{ display: selected == page.id ? "block" : "none" }}
										>
											{
												page.menu.map((page, index) => (
													<li key={index}>
														<Link href={page.path[0]}>
															<a
																className="react-sidebar__menu-button"
																onClick={this.props.onClose}
															>
																{page.name.en}
															</a>
														</Link>
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
