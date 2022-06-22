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
import Pagination from "../../components/Pagination/Pagination";
import { Link, useParams } from "react-router-dom";
import WhereAlert from "../../components/WhereAlert/WhereAlert";
import { NOTIFICATION_STATES } from "../../constants/NotificationStates";
import WhereModal from "../../components/WhereModal/WhereModal";
import { Button } from "react-rainbow-components";
import ScoreService from "../../services/ScoreService";
import { Rating } from "react-rainbow-components";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
	iconUrl: require('leaflet/dist/images/marker-icon.png').default,
	shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

function Listing({ user, ...params }) {
	const position = [39.76, 30.52]
	const [places, setPlaces] = useState([]);
	const [filterText, setFilterText] = useState("");
	const [filteredItems, setFilteredItems] = useState([]);
	let { cityId, categoryId } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const [isDeleted, setIsDeleted] = useState(false);

	const getPlaces = () => {
		let placeService = new PlaceService();
		placeService.getAll().then((result) => {
			setPlaces(result.data)
			if (places.length === 0) {
				setIsOpen(true);
			}
		}, err => {
			console.log(err.response);
		});
	};

	const getPlaceFilteredByCityId = (cityId) => {
		let placeService = new PlaceService();
		placeService.getPlaceFilteredByCityId(cityId).then((result) => {
			setPlaces(result.data)
			if (places.length === 0) {
				setIsOpen(true);
			}
		}, err => {
			console.log(err.response);
		});
	};

	const getPlaceFilteredByCategoryId = (categoryId) => {
		let placeService = new PlaceService();
		placeService.getPlaceFilteredByCategoryId(categoryId).then((result) => {
			setPlaces(result.data)
			if (places.length === 0) {
				setIsOpen(true);
			}
		}, err => {
			console.log(err.response);
		});
	};

	const filterByCityIdAndCategoryId = (cityId, categoryId) => {
		let placeService = new PlaceService();
		placeService.filterByCityIdAndCategoryId(cityId, categoryId).then((result) => {
			setPlaces(result.data)
			if (places.length === 0) {
				setIsOpen(true);
			}
		}, err => {
			console.log(err.response);
		});
	};

	useEffect(() => {
		if (cityId !== undefined && categoryId !== undefined) {
			filterByCityIdAndCategoryId(cityId, categoryId);
		}
		else if (cityId !== undefined && categoryId === undefined) {
			getPlaceFilteredByCityId(cityId);
		}
		else if (categoryId !== undefined && cityId === undefined) {
			getPlaceFilteredByCategoryId(categoryId);
		}
		else {
			getPlaces();
		}
	}, []);

	useEffect(() => {
		if (places.length > 0) {
			console.log(places);
			setFilteredItems(places.filter(place =>
				place.placeDto.placeName?.toLowerCase().includes(filterText.toLowerCase()) ||
				place.placeDto.placeDescription?.toLowerCase().includes(filterText.toLowerCase()) ||
				place.placeDto.locationCityName?.toLowerCase().includes(filterText.toLowerCase())));
		}
	}, [filterText]);
	const itemsToDisplay = filterText ? filteredItems : places;

	const deletePlace = (id) => {
		let placeService = new PlaceService();
		placeService.deleteById(id).then((result) => {
			getPlaces();
			setIsDeleted(true);
		}, err => {
			console.log(err.response);
		});
	}

	return (
		<main className="haslayout listing">
			<div id="content" className="content">
				<div className="listing">
					<div id="mapclustring" className="mapclustring" style={{ position: "fixed", width: "932px", height: "859px", display: "block", float: "right", right: 0, verticalAlign: "baseline" }}>
						<div className="maparea">
							<div id="listingmap" className="listingmap">
								<MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
									<TileLayer
										attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									{itemsToDisplay.length > 0 && itemsToDisplay.map((place, index) => {
										return (
											<Marker key={index} position={[place.placeDto.locationLat, place.placeDto.locationLng]}>
												<Popup>
													<div className="popup-content">
														<h3>{place.placeDto.placeName}</h3>
														<p style={{ textTransform: 'capitalize' }}>{place.placeDto.description}</p>
														<a href={`/listing/${place.placeDto.id}`}>
															<button className="btn btn-primary">View</button>
														</a>
													</div>
												</Popup>
											</Marker>
										)
									})
									}
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
													<input type="text" name="qsearch" className="form-control" placeholder="What are you looking for ?"
														onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())} />
												</div>
											</fieldset>
										</form>
									</div>
								</div>
								<div className="themeposts placesposts gridview">
									{itemsToDisplay.length > 0 ? itemsToDisplay.map((place, index) => {
										return (
											<div className="themepost placespost">
												<Link to={`/listing/${place.placeDto.id}`}>
													<figure className="featuredimg">
														<img src="https://media-cdn.tripadvisor.com/media/photo-s/10/e5/73/92/photo1jpg.jpg" alt="image description" className="detail" />
													</figure>
												</Link>
												<div className="postcontent">
													<Link to={`/listing/${place.placeDto.id}`}>
														<div>
															<h3 >{place.placeDto.placeName}</h3>
															<div className="description">
																<p>{place.placeDto.phoneNumber}</p>
															</div>

															<div className="reviewcategory">
																<div className="review">
																	<Rating value={place.scoreResponseRequest.averageOfScores} readOnly />
																	<em>({place.scoreResponseRequest.numberOfReview} Review)</em>
																</div>
																<div className="category">
																	{(place.placeDto.placeCategories).map(category => {
																		return (
																			<div>
																				<i className={`icon-${category.categoryCategoryName.toLowerCase()}`}></i>
																				<span>{category.categoryCategoryName}</span>
																			</div>
																		);
																	})}
																</div>
															</div>
														</div>
													</Link>
													<div className="themepostfoot">
														<a className="location" href="">
															<i className="icon-icons74"></i>
															<em>{place.placeDto.locationCityName}</em>
														</a>
														{user.role === "ROLE_ADMIN" && <div class="deleteplace">
															<Button label="Delete Place" variant="destructive" onClick={() => deletePlace(place.placeDto.id)} />
														</div>}

													</div>
												</div>
											</div>
										);
									}) :
										<WhereModal isOpen={isOpen} title="No places found!" description="Places with the criteria not found!" setIsOpen={setIsOpen} isRedirect />
									}
									{isDeleted && <WhereModal isOpen={isDeleted} title="Place Deleted!" description="Place deleted successfully." setIsOpen={setIsDeleted} />}
									<Pagination />
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