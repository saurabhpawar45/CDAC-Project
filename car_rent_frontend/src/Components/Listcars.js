import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from 'moment';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer/Footer";

const Listcars = () => {
    const [carslist, setCarslist] = useState([]);
    const { startDate, endDate, carLocation } = useParams();
    const history = useHistory();
    const token = JSON.parse(localStorage.getItem("jwttoken"));

    const init = () => {
        const findby={
            startDate:startDate,
            endDate:endDate,
            carLocation:carLocation
        }
        const date1 = moment(startDate);
        const date2 = moment(endDate);
        const diffInDays = date2.diff(date1, "days");
        localStorage.setItem("startDate", startDate);
        localStorage.setItem("endDate", endDate);
        localStorage.setItem("days", diffInDays+1);



       console.log('in init');
        axios.post("/findcars" ,findby, { headers: { "authorization": `Bearer ${token}` } })
            .then(response => {
                console.log('Printing cars data', response.data);
                setCarslist(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }


    useEffect(() => {
        init();
    },[])
    
    return (
        <>
            <div>
                <h2>Cars available in {carLocation} from {startDate} to {endDate}</h2>
                <div className="container">
                    <div className="row g-3">
                        {carslist.map((car) => (
                            <div className="col-4">
                                <br />
                                <div className="card " key={car.id}>
                                    <div onClick={() => history.push(`/car/${car.id}`)}>

                                        <img src={car.imageUrl} height={150} className="card-img-top px-5" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{car.make} {car.model}</h5>
                                            <h5 className="card-title">{car.type}</h5>
                                            <h5 className="card-title">{car.fuelType}</h5>
                                            <p className="card-text description-box overflow-auto">{car.seat} Seater </p>
                                            <h5>{car.rent} Rs.</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <Footer />
            </div>
          
           
        </>
    )
}
export default Listcars;