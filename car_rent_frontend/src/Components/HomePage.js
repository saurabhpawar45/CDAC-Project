
import { useHistory } from "react-router-dom";
import car from "../images/car_in_home.jpg"
import "./HomePage.css";
import Footer from "./Footer/Footer";

import {  useState } from "react";




const HomePage = () => {
    const history = useHistory();

 //   const [cars, setCars] = useState([])
    const [sdate, setSdate] = useState('');
    const [edate, setEdate] = useState('');
    const [city, setCity] = useState("");
    const [formValid, setFormValid] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const findcar = {
            startd: sdate,
            endd: edate,
            icity: city
        }
        const form = e.target;

        if (form.checkValidity() === false) {
            e.stopPropagation(); // stop the event from propagating
            setFormValid(true);
            return;
        }
        if(sdate>edate){
            e.stopPropagation();
            setFormValid(true);
            alert('endDate should be after start date');
            return;

        }
        setFormValid(false);
        console.log(findcar);
        history.push(`/listcars/${sdate}/${edate}/${city}`);
    }

    //const token = JSON.parse(localStorage.getItem("jwttoken"));
    // useEffect(() => {
    //     init();
    // }, [])
    // const init = () => {
    //     axios.get(url + "/getcars", { headers: { "authorization": `Bearer ${token}` } }
    //     )
    //         .then(response => {
    //             console.log('Printing cars data', response.data);
    //             setCars(response.data);
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong', error);
    //         });
    // }
    return (
        <>
            <div>
                <div className="container" >
                    <div className="dynamicc_text align-items-center bgg_about">
                        <br></br>
                        <h1><b> Welcome to Let's GO </b></h1>
                        <br></br>
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src={car} className="d-block w-100" height={600} alt=" Not Found..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>THE PERFECT CAR FOR YOUR NEXT TRIP IS JUST AROUND THE CORNER</h5>
                                    <h1>BOOK NOW !!!</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={car} className="d-block w-100" height={600} alt=" Not Found..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>RENT A CAR</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={car} className="d-block w-100" height={600} alt=" Not Found..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>CHOOSE FROM OUR WIDE RANGE OF CARS</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={car} className="d-block w-100" height={600} alt=" Not Found..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>WE LOVE GIVING BEST EXPERIENCES</h1>
                                    <h5>We cover you under all the circumstances to ensure the best journey</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        <br></br>
                    </div>
                    <div className="row">
                        <div className="dynamicc_text col-12 mb-5">
                            <h1 className='display-6 fw-bolder text-center'>Enter Details</h1><hr />
                        </div>
                    </div>
                    <div>

                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <form onSubmit={submitHandler} className={formValid ? 'was-validated' : ''} noValidate>
                                        <div class="form-group">
                                            <label for="startDate">Start Date</label>
                                            <input type="date" class="form-control" id="startDate" value={sdate} onChange={(e) => { setSdate(e.target.value); }} required />
                                            <div class="invalid-feedback">
                                                Please select a start date.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="endDate">End Date</label>
                                            <input type="date" class="form-control" id="endDate" value={edate} onChange={(e) => { setEdate(e.target.value); }} required />
                                            <div class="invalid-feedback">
                                                Please select an end date.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="cityDropdown">City</label>
                                            <select class="form-control" id="cityDropdown" value={city} onChange={(e) => { setCity(e.target.value); }} required>
                                                <option value="">Select a city</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Pune">Pune</option>
                                                <option value="Nashik">Nashik</option>
                                            </select>
                                            <div class="invalid-feedback">
                                                Please select a city.
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <button type="submit" class="btn btn-primary"  >Find Cars</button>
                                    </form>
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
export default HomePage;