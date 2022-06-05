import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/mainpage.css";
import "../../css/style.css";
import CategoryService from '../../services/CategoryService';
import CityService from "../../services/CityService";

const MainPage = () => {

	const [categories, setCategories] = useState([]);
	const [cities, setCities] = useState([]);

	const getCategories = () => {
		let categoryService = new CategoryService();
		categoryService.getAll().then((result) => {
			setCategories(result.data)
		}, err => {
			console.log(err.response.data.error_message);
		});
	};
	const getCities = () => {
		let cityService = new CityService();
		cityService.getAll().then((result) => {
			setCities(result.data)
		}, err => {
			console.log(err.response.data.error_message);
		});
	};

	useEffect(() => {
		getCategories();
		getCities();
	}, []);

	return (
		<div>
			<div className='mainpage'>
				<div className='container'>
					<div>
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
							<div className='banner-content'>
								<h1>Find Local Services</h1>
								<div className='description'>
									<p>Find the best places in the city for food, activities and relaxation</p>
								</div>
								<form action="" className='form-theme'>
									<fieldset>
										<div className='banner-formgroup banner-inputwithicon'>
											<i className='icon-layers'></i>
											<div className='banner-select'>
												<select name="" id="banner-categorieschosen" className='banner-categorieschosen'>
													<option>Ex: Food, Retail, hotel, cinema</option>
													{categories.map((category, index) => {
														return (
															<option className='deneme' key={index} value={category.id}>{category.categoryName}</option>
														);
													})}
												</select>
											</div>
										</div>
										<div className='banner-formgroup banner-inputwithicon'>
											<i className="icon-global"></i>
											<div className="banner-select">
												<select id="banner-locationchosen" className="banner-locationchosen">
													<option>Choose a Location</option>
													{cities.map((city, index) => {
														return (
															<option key={index} value={city.id}>{city.name}</option>
														);
													})}
												</select>
											</div>
										</div>
										<div className='banner-formgroup banner-inputwithicon' id='ab'>
											<i className="icon-money"></i>
											<div className="banner-select">
												<p>Price</p>
												<div className='banner-range'>
													<input type="range" className="form-range a " min="0" max="1000" id="customRange2"></input>
												</div>
											</div>
										</div>
										<div className='banner-button-style'>
											<button className='banner-button'>Search Places</button>
										</div>
									</fieldset>
								</form>
								<div className='banner-footer'>
									<div className="banner-best-title">
										<h2>
											Find the Best <br />
											<span>Places in the City</span>
										</h2>
									</div>
									<ul>
										<li>
											<i className='icon-food'></i>
											<h3>Restaurant</h3>
										</li>
										<li>
											<i className="icon-nightlife"></i>
											<h3>Night Life</h3>
										</li>
										<li>
											<i className="icon-entertainment"></i>
											<h3>Entertainment</h3>
										</li>
										<li>
											<i className="icon-localservice"></i>
											<h3>Local Services</h3>
										</li>
										<li>
											<i className="icon-healthfitness"></i>
											<h3>health &amp; Fitness</h3>
										</li>
										<li>
											<i className="icon-tourism"></i>
											<h3>Tourism</h3>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default MainPage