import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookCar.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "./Common/constants";
import Footer from "./Footer/Footer";
import swal from 'sweetalert';

import AddressAndPaymentMethod from "./AddressAndPaymentMethod";
const BookCar = () => {

    const [car, setCar] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const startDate = localStorage.getItem("startDate");
    const endDate = localStorage.getItem("endDate");
    const days = localStorage.getItem("days");
    useEffect(() => {
        init();
    }, [])
    const init = () => {
        if (token) {
          
            console.log("in init");
            if (id) {
                axios.get(url + "/getcar/" + id, {
                        headers: { authorization: `Bearer ${token}` },
                    })
                    .then((response) => {
                        console.log("Printing car data", response.data);
                        setCar(response.data);
                        
                    
                    })
                    .catch((error) => {
                        console.log("Something went wrong", error);
                    });
        
            }
            
           
        }else{
            swal("Please Login First !", "warning", {
                button: "OK",
              });
            history.push('/login');
        }

    }
    return (
        <>
            <div>
                <div className="container">
                    <div className="">
                        <div className=" card mb-3">
                            <div className=" row g-o">
                                <div className=" col-md-4">
                                    <img src={car.imageUrl} className="img-fluid rounded-start" alt="not found" />
                                </div>
                                <div className=" col-md-8">
                                    <div className=" card-body">
                                        <h5 className="card-title">Car Details</h5>
                                        <ul class="list-group">
                                            <li className="list-group-item active">{car.make} {car.model}</li>
                                            <li className="list-group-item">{car.seat} Seater </li>
                                            <li className="list-group-item">{car.type}</li>
                                            <li className="list-group-item">{car.fuelType}</li>
                                            <li className="list-group-item">Rent-{car.rent} Rs. Per Day </li>
                                            <li className="list-group-item">Total Amount - {car.rent * days} </li>
                                            <li className="list-group-item">From {startDate} </li>
                                            <li className="list-group-item">To {endDate} </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <AddressAndPaymentMethod carobj={car} />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
                <br />
                <Footer />
            </div>
        </>
    )
}
export default BookCar;