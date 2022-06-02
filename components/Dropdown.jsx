import React from "react";
import { autobind } from "react-decoration";
import onClickOutside from "react-onclickoutside";

@onClickOutside
class Dropdown extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	@autobind
	onClick() {
		this.setState({ open: !this.state.open });
	}

	handleClickOutside() {
		this.setState({ open: false });
	}

	render() {

		const {
			open
		} = this.state;

		const {
			label,
			children
		} = this.props;

		return (
			<div className="dropdown">
				<div
					className="dropdown-toggle"
					onClick={this.onClick}
				>
					<button className="btn btn-link">
						<div className="info">
							{label}
						</div>
						<div className="indicator">
							<i className="wb-chevron-down-mini" />
						</div>
					</button>
				</div>
				<div
					className="dropdown-menu dropdown-menu-end"
					style={{ display: open ? "block" : "none" }}
				>
					{children}
				</div>
			</div>
		);
	}

}

export default Dropdown;
