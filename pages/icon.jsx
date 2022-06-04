import React from "react";
import ICONS from "constants/icon.json";

class IconPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			loading: true
		};
	}

	render() {
		return (
			<div className="container-fluid h-100">
				<div className="row">
					<div className="col-sm-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title mb-4">Search Icon</h5>
								<div className="mb-4">
									<label className="form-label">Icon Name</label>
									<input
										className="form-control"
										placeholder="Enter the name of icon and press enter"
									/>
								</div>
								<div>
									<label className="form-label">Icon Set</label>
									<div
										className="form-check"
									>
										<input
											className="form-check-input"
											type="radio"
										/>
										<label className="form-check-label">
											All Icon Sets
										</label>
									</div>
									{
										Object
											.keys(ICONS)
											.map((iconSet, index) => (
												<div
													className="form-check"
													key={index}
												>
													<input
														className="form-check-input"
														type="radio"
													/>
													<label className="form-check-label">
														{ICONS[iconSet].n}
													</label>
												</div>
											))
									}
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Icon List</h5>
								<p className="mb-4">
									Searching for icons and filtering the icon list. 
									<br />
									To organize the list of icons, and to find icons in a list that spans many sections, you can sort, search, and filter the list.
								</p>
								<div className="icons__container">
									{
										Object
											.keys(ICONS)
											.map((iconSet, index) => (
												<div
													key={index}
													className="icons__section"
												>
													<label className="card-title">
														{ICONS[iconSet].n}
													</label>
													<div className="row">
														{
															ICONS[iconSet]
																.i
																.map((icon, index) => (
																	<div
																		key={index} 
																		className="col-sm-3"
																	>
																		<a>
																			<i className={icon.c} />
																			<span>{icon.n}</span>
																		</a>
																	</div>
																))
														}
													</div>
												</div>
											))
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default IconPage;
