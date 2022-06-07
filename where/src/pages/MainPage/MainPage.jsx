import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/mainpage.css";
import "../../css/style.css";
import CategoryService from '../../services/CategoryService';
import CityService from "../../services/CityService";
import LocalStorageService from "../../services/LocalStorageService";
import jwt_decode from "jwt-decode";
import UserService from "../../services/UserService";
import { Link } from 'react-router-dom';

const MainPage = () => {
	const [categories, setCategories] = useState([]);
	const [cities, setCities] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [selectedCityId, setSelectedCityId] = useState(0);
	const [selectedCategoryId, setSelectedCategoryId] = useState(0);

	const getCategories = () => {
		let categoryService = new CategoryService();
		categoryService.getAll().then((result) => {
			setCategories(result.data)
		}, err => {
			console.log(err.response);
		});
	};
	const getCities = () => {
		let cityService = new CityService();
		cityService.getAll().then((result) => {
			setCities(result.data)
		}, err => {
			console.log(err.response);
		});
	};

	const getCurrentUser = () => {
		var decoded = jwt_decode(localStorage.getItem("accessToken"));
		let username = decoded.sub;
		const userService = new UserService();
		userService.getUserByUsername(username).then((res) => {
			setCurrentUser(res.data);
		});
	};
	const handleLocation = (event) => {
		setSelectedCityId(event.target.value);
	}

	const handleCategory = (event) => {
		setSelectedCategoryId(event.target.value);
	}

	useEffect(() => {
		getCategories();
		getCities();
		if (localStorage.getItem("accessToken")) {
			getCurrentUser();
		}
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
												<select name="" id="banner-categorieschosen" className='banner-categorieschosen' onChange={handleCategory}>
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
												<select onChange={handleLocation} id="banner-locationchosen" className="banner-locationchosen">
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

										{selectedCategoryId !== 0 && selectedCityId !== 0 &&
											<div className='banner-button-style'>
												<Link to={`/listing/search/${selectedCityId}/${selectedCategoryId}`}>
													<button className='banner-button'>Search Places</button>
												</Link>
											</div>
										}
										{selectedCategoryId !== 0 && selectedCityId === 0 &&
											<div className='banner-button-style'>
												<Link to={`/listing/search/category/${selectedCategoryId}`}>
													<button className='banner-button'>Search Places</button>
												</Link>
											</div>
										}
										{selectedCategoryId === 0 && selectedCityId !== 0 &&
											<div className='banner-button-style'>
												<Link to={`/listing/search/city/${selectedCityId}`}>
													<button className='banner-button'>Search Places</button>
												</Link>
											</div>
										}
										{selectedCategoryId === 0 && selectedCityId === 0 &&
											<div className='banner-button-style'>
												<Link to={`/listing`}>
													<button className='banner-button'>Search Places</button>
												</Link>
											</div>
										}
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