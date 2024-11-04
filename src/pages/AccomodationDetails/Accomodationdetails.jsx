import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleAccomodation } from '../../features/actions/accomodationsAction';

const Accomodationdetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleAccomodation(id));
    }, [dispatch, id]);

    const { singleAccomodation } = useSelector((state) => state.accomodation);

    if (!singleAccomodation) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6 bg-white shadow-lg w-full">
            <h1 className="text-2xl font-bold mb-4">{singleAccomodation.name}</h1>
            <p className="text-gray-600 mb-4">{singleAccomodation.description}</p>

            {/* Location */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Location</h2>
                <p>{`${singleAccomodation.location.city}, ${singleAccomodation.location.state}, ${singleAccomodation.location.country}`}</p>
                <p>Coordinates: {singleAccomodation.location.locationCoordinates.coordinates.join(", ")}</p>
            </div>

            {/* Fees */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Fees</h2>
                <p>Monthly: ₹{singleAccomodation.fees.monthly}</p>
                <p>Security Deposit: ₹{singleAccomodation.fees.securityDeposit}</p>
            </div>

            {/* Contact Info */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Contact Info</h2>
                <p>Phone: {singleAccomodation.contactInfo.phone}</p>
                <p>Email: {singleAccomodation.contactInfo.email}</p>
            </div>

            {/* Images */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {singleAccomodation.images.map((image) => (
                        <img
                            key={image._id}
                            src={image.secure_url}
                            alt="Accommodation"
                            className="w-full h-48 object-cover rounded"
                        />
                    ))}
                </div>
            </div>

            {/* Capacity and Available Spaces */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Capacity & Availability</h2>
                <p>Capacity: {singleAccomodation.capacity} people</p>
                <p>Available Spaces: {singleAccomodation.availableSpaces}</p>
            </div>

            {/* Owner Information */}
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Owner</h2>
                <p>{singleAccomodation.ownerName}</p>
            </div>

            {/* Amenities */}
            {singleAccomodation.amenities.length > 0 ? (
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Amenities</h2>
                    <ul className="list-disc list-inside">
                        {singleAccomodation.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-gray-500">No amenities listed.</p>
            )}
        </div>
    );
};
export default Accomodationdetails