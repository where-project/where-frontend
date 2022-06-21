import React, { useEffect, useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import CategoryService from '../../../services/CategoryService';
import CityService from '../../../services/CityService';
import AmenityService from '../../../services/AmenityService';
import CustomNotification from '../../../components/Notification/CustomNotification';
import { NOTIFICATION_STATES } from '../../../constants/NotificationStates';
const BasicInformation = ({ basicInformation, setBasicInformation, amenities, setAmenities, ...props }) => {
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [amenitiesOptions, setAmenitiesOptions] = useState([]);
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        getCategories();
        getCities();
        getAmenities();
    }, [])

    const getCities = () => {
        let cityService = new CityService();
        cityService.getAll().then(res => {
            setCities(res.data);
        })
            .catch(err => { console.log(err) });
    }
    const getCategories = () => {
        let categoryService = new CategoryService();
        categoryService.getAll().then(res => {
            setCategories(res.data);
        })
            .catch(err => { console.log(err) });
    }

    const getAmenities = () => {
        let amenityService = new AmenityService();
        amenityService.getAll().then(res => {
            setAmenitiesOptions(res.data);
        })
            .catch(err => {
                console.log(err)
            });
    }

    const onClickAmenities = (value, amenity) => {
        if (amenities.includes(amenity)) {
            value.remove('done')
            setAmenities(amenities.filter(item => item !== amenity));
        } else {
            value.add('done')
            setAmenities([...amenities, amenity]);
        }
    }
    const schema = yup.object().shape({
        title: yup.string().required("Please provide a valid title."),
        country: yup.string().required("Please provide a valid country."),
        categories: yup.string().required("Please provide a valid categories."),
        city: yup.string().required("Please provide a valid city."),
        phoneNumber: yup.string().required("Please provide a valid phoneNumber."),
        description: yup.string().required("Please provide a valid description."),
        address: yup.string().required("Please provide a valid address."),
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setBasicInformation(values);
                    setSubmitting(false);
                    setNotification(true);
                }}
                initialValues={{
                    title: '',
                    country: '',
                    categories: '',
                    city: '',
                    phoneNumber: '',
                    description: '',
                    address: '',
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    dirty,
                    isSubmitting,
                }) => (
                    <section>
                        <Form onSubmit={handleSubmit}>
                            <fieldset className='listing' disabled={isSubmitting}>
                                <div className="boxtitle">
                                    <h3>Basic Information</h3>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>Venue Title</label>
                                            <input type="text" name="title" className="form-control" placeholder="Esogu Restaurant" onChange={handleChange} value={values.title} />
                                            {touched.title && errors.title ? (
                                                <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.title}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>Country</label>
                                            <input type="text" name="country" className="form-control" placeholder="Turkey" onChange={handleChange} value={values.country} />
                                            {touched.country && errors.country ? (
                                                <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.country}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>Categories</label>
                                            <select type="text" name="categories" className="form-control" placeholder="Select Category" onChange={handleChange} defaultValue="1" >
                                                <option key={1} value={1}>
                                                    Select Category
                                                </option>
                                                {categories.map((category) => {
                                                    return (
                                                        <option key={category.id} value={category.id}>
                                                            {category.categoryName}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            {touched.categories && errors.categories ? (
                                                <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.categories}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>City</label>
                                            <select type="text" name="city" className="form-control" placeholder="Turkey" onChange={handleChange} value={values.city} >
                                                <option key={1} value={1}>
                                                    Select City
                                                </option>
                                                {cities.map((city) => {
                                                    return (
                                                        <option key={city.id} value={city.id}>
                                                            {city.name}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            {touched.city && errors.city ? (
                                                <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.city}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>Phone Number</label>
                                            <input type="tel" name="phoneNumber" className="form-control" placeholder="111 - 111 - 9870" onChange={handleChange} value={values.phoneNumber} />
                                            {touched.phoneNumber && errors.phoneNumber ? (
                                                <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.phoneNumber}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>Address</label>
                                            <input type="text" name="address" className="form-control" placeholder="Büyükdere mahallesi,..." onChange={handleChange} value={values.address} />
                                            {touched.address && errors.address ? (
                                                <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.address}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                        <div className="form-group dashboardfield">
                                            <label>Description</label>
                                            <div className="clearfix"></div>
                                            <textarea name="description" className="form-control tinymceeditor" onChange={handleChange} value={values.description} placeholder="Description" />
                                            {touched.description && errors.description ? (
                                                <Alert style={{ marginTop: "15%", borderRadius: "10px" }} key="danger" variant="danger">
                                                    {errors.description}
                                                </Alert>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group dashboardfield">
                                            <label>Amenities</label>
                                            <ul className="amenities">
                                                {
                                                    amenitiesOptions.map((amenity, id) => {
                                                        return (
                                                            <li key={id}>
                                                                <input type="button" className='amenity_button' name={amenity.name} value={amenity.name} onClick={(event) => onClickAmenities(event.currentTarget.classList, amenity)} />
                                                            </li>
                                                        );
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="btnarea">
                                            <div className="form-group dashboardfield">
                                                <button className='btn right' type="submit" disabled={isSubmitting}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                    {notification && <CustomNotification title="Added" icon={NOTIFICATION_STATES.INFO} description="Please go to next page." />}
                                </div>
                            </fieldset>
                        </Form>
                    </section>
                )}
            </Formik>
        </>
    )
}

export default BasicInformation