import React, { useEffect, useState } from 'react'
import "../../../css/Dashboard/content.css"
import Price from './Price'
import BasicInformation from './BasicInformation'
import Location from './Location'
import BusinessHour from './BusinessHour'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrevNext from '../../../components/Pagination/PrevNext';
import ProcessBar from '../../../components/ProcessBar/ProcessBar';
import BusinessHourService from '../../../services/BusinessHourService'
let placeData = {
    createPlaceRequest: {
        "placeName": "",
        "description": "",
        "phoneNumber": "",
        "ownerId": "",
        "createPlaceCategoryRequest": [
            {
                "categoryId": "",
            }
        ],
        createPlaceAmenityRequest: [
        ]
    },
    createLocationRequest: {
        "cityId": "",
        "lat": "",
        "lng": "",
        "address": "",
        "country": "",
    },
    createItemRequest: [
    ],
}
const AddPlace = () => {
    const [pricingList, setPricetingList] = useState([]);
    const [businessHour, setBusinessHour] = useState([]);
    const [basicInformation, setBasicInformation] = useState();
    const [amenities, setAmenities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hello, setHello] = useState(false);
    const [counter, setCounter] = useState(0);
    const [position, setPosition] = useState([39.76, 30.52]);
    const [sendData, setSendData] = useState(false);
    useEffect(() => {
        if (sendData) {
            placeData.createPlaceRequest.placeName = basicInformation.title;
            placeData.createPlaceRequest.description = basicInformation.description;
            placeData.createPlaceRequest.phoneNumber = basicInformation.phoneNumber;
            placeData.createPlaceRequest.createPlaceCategoryRequest[0].categoryId = parseInt(basicInformation.categories);
            placeData.createPlaceRequest.ownerId = 1;
            placeData.createLocationRequest.cityId = parseInt(basicInformation.city);
            placeData.createLocationRequest.lat = position.lat;
            placeData.createLocationRequest.lng = position.lng;
            placeData.createLocationRequest.address = basicInformation.address;
            placeData.createLocationRequest.country = basicInformation.country;

            for (let i = 0; i < amenities.length; i++) {
                placeData.createPlaceRequest.createPlaceAmenityRequest.push({
                    "amenityId": amenities[i].id
                })
            }
            pricingList.map((item) => {
                placeData.createItemRequest.push({ title: item.title, description: item.description, price: item.price });
            })
            console.log(placeData);
            setSendData(false);
        }
    }, [sendData])
    const activeComponent = () => {
        if (currentPage === 1) {
            return <BasicInformation basicInformation={basicInformation} setBasicInformation={setBasicInformation} amenities={amenities} setAmenities={setAmenities} />
        }
        else if (currentPage === 2) {
            return <Location position={position} setPosition={setPosition} />
        }
        else if (currentPage === 3) {
            return <Price pricingList={pricingList} setPricetingList={setPricetingList} counter={counter} setCounter={setCounter} />
        }
        else if (currentPage === 4) {
            return <BusinessHour businessHour={businessHour} setBusinessHour={setBusinessHour} setHello={setHello} />
        }
    }

    return (
        <div div className="content" >
            {
                console.log(pricingList)
            }
            <div className="formtheme formaddlisting">
                <div className="addlistingsteps">
                    <ProcessBar currentPage={currentPage} />
                    {activeComponent()}
                    <PrevNext currentPage={currentPage} setCurrentPage={setCurrentPage} setSendData={setSendData} />
                    {console.log(businessHour)}
                </div>
            </div>
        </div >
    )
}

export default AddPlace