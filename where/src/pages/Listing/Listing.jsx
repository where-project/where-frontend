import React, { useState, useEffect } from "react";
import "../../css/listing.css";
import "../../css/icon.css";
import "../../css/style.css"
import "../../css/responsive.css"
import CategoryService from '../../services/CategoryService';
import CityService from "../../services/CityService";
import PlaceService from "../../services/PlaceService";
import 'font-awesome/css/font-awesome.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
	iconUrl: require('leaflet/dist/images/marker-icon.png').default,
	shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});


function Listing() {
	const position = [39.76, 30.52]
	const [categories, setCategories] = useState([]);
	const [cities, setCities] = useState([]);
	const [places, setPlaces] = useState([]);

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

	const getPlaces = () => {
		let placeService = new PlaceService();
		placeService.getAll().then((result) => {
			setPlaces(result.data)
		}, err => {
			console.log(err.response.data.error_message);
		});
	};

	useEffect(() => {
		getCategories();
		getCities();
		getPlaces();
	}, []);

	return (
		<main className="haslayout">
			<div id="listar-content" className="content">
				<div className="listing">
					<div id="mapclustring" className="mapclustring">
						<div className="maparea">
							<div id="listingmap" className="listingmap">
								<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker position={position}>
										<Popup>
											A pretty CSS3 popup. <br /> Easily customizable.
										</Popup>
									</Marker>
								</MapContainer>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left">
						<div className="row">
							<div className="listingarea">
								<div className="innerpagesearch">
									<div className="innersearch">
										<div className="searchstatus"><h1><span>Results For</span> Food &amp; Drinks Listings</h1></div>
										<form className="formtheme formsearchlisting">
											<fieldset>
												<div className="form-group inputwithicon">
													<i className="icon-icons185" />
													<input type="text" name="q" className="form-control" placeholder="What are you looking for ?" />
												</div>
												<div className="form-group inputwithicon">
													<i className="icon-global"></i>
													<div className="selection selectlocation">
														<select className="form-control" >
															<option value="">All Location</option>
															{cities.map((city, index) => {
																return (
																	<option key={index} value={city.id}>{city.name}</option>
																);
															})}
														</select>
													</div>
												</div>
												<div className="form-group inputwithicon">
													<i className="icon-layers"></i>
													<div className="selection selectlocation">
														<select className="form-control">
															<option>All Categories</option>
															{categories.map((category, index) => {
																return (
																	<option key={index} value={category.id}>{category.categoryName}</option>
																);
															})}
														</select>
													</div>
												</div>
											</fieldset>
										</form>
									</div>
								</div>
								<div className="themeposts placesposts gridview">
									{places.map((place, index) => {
										return (
											<div className="themepost placespost">
												<figure className="featuredimg">
													<a href="">
														<img src="https://media-cdn.tripadvisor.com/media/photo-s/10/e5/73/92/photo1jpg.jpg" alt="image description" className="mCS_img_loaded" />
													</a>
												</figure>
												<div className="postcontent">
													<h3><a href="">{place.placeName}</a></h3>
													<div className="description">
														<p>{place.phoneNumber}</p>
													</div>
													<div className="reviewcategory">
														<div className="review">
															<span className="stars"><span></span></span>
															<em>(3 Review)</em>
														</div>
														<a href="" className="category">
															{(place.placeCategories).map(category => {
																return (
																	<div>
																		<i className="icon-nightlife"></i>
																		<span>{category.categoryCategoryName}</span>
																	</div>
																);
															})}
														</a>
													</div>
													<div className="themepostfoot">
														<a className="location" href="">
															<i className="icon-icons74"></i>
															<em>{place.locationCityName}</em>
														</a>
													</div>
												</div>
											</div>
										);
									})}
									<nav className="pagination">
										<ul>
											<li className="prevpage"><a href=""><i className="fa fa-angle-left"></i></a></li>
											<li className="active"><a href="">1</a></li>
											<li><a href="">2</a></li>
											<li><a href="">3</a></li>
											<li className="nextpage"><a href=""><i className="fa fa-angle-right"></i></a></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main >
	)
}

export default Listing;