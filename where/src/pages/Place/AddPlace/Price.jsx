import React, { useState } from 'react'
import { Alert, Form } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import Slot from '../../../components/Slot/Slot';

const schema = yup.object().shape({
    title: yup.string().required("Please provide a valid title."),
    description: yup.string().required("Please provide a valid description."),
    price: yup.number().required("Please provide a valid price").positive("price cannot be negative"),
});

const Price = ({ pricingList, setPricetingList, counter, setCounter, ...props }) => {
    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setCounter(counter + 1);
                    values.id = counter;
                    setPricetingList([...pricingList, values]);
                    setSubmitting(false);
                    console.log(pricingList);
                    resetForm();
                }}
                initialValues={{
                    title: '',
                    description: '',
                    price: '',
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
                            <div>
                                <fieldset className='listing' disabled={isSubmitting}>
                                    <div className="boxtitle">
                                        <h3>Price Setting</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group dashboardfield">
                                                <label htmlFor='title'>Title</label>
                                                <input type="text" name="title" className="form-control" placeholder="Title" onChange={handleChange} value={values.title} />
                                                {touched.title && errors.title ? (
                                                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                        {errors.title}
                                                    </Alert>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group dashboardfield">
                                                <label htmlFor='description'>Description</label>
                                                <input type="text" name="description" className="form-control" placeholder="Description" onChange={handleChange} value={values.description} />
                                                {touched.description && errors.description ? (
                                                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                        {errors.description}
                                                    </Alert>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group dashboardfield">
                                                <label htmlFor='price'>Price</label>
                                                <input type="number" name="price" className="form-control" placeholder="Price" onChange={handleChange} step="0.01" values={values.price} />
                                                {touched.price && errors.price ? (
                                                    <Alert style={{ marginTop: "10px", borderRadius: "10px" }} key="danger" variant="danger">
                                                        {errors.price}
                                                    </Alert>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                            <div className="btnarea">
                                                <div className="form-group dashboardfield">
                                                    <button className='btnadd' type="submit" disabled={isSubmitting}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </Form>
                    </section>
                )}
            </Formik>
            <Slot pricingList={pricingList} setPricetingList={setPricetingList} />
        </>
    );
}

export default Price