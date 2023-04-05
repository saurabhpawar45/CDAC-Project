import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { url } from "./Common/constants";

const AddCar = () => {
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [type, setType] = useState("");
  const [carLocation, setCarLocation] = useState("");
  const [seat, setSeat] = useState("");
  const [rent, setRent] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [button, setbutton] = useState("Add Car");
  const { id } = useParams();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("jwttoken"));
  const init = () => {
    if (id) {
      axios
        .get(url + "/getcar/" + id, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Printing car data", response.data);
          setMake(response.data.make);
          setModel(response.data.model);
          setSeat(response.data.seat);
          setImageUrl(response.data.imageUrl);
          setType(response.data.type);
          setRent(response.data.rent);
          setCarLocation(response.data.carLocation);
          setMileage(response.data.mileage);
          setFuelType(response.data.FuelType);
          setbutton("Confirm");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };
  useEffect(() => {
    init();
  }, []);

  const HandleAddProduct = () => {
    if (id) {
      console.log(id);
      const car = {
        id,
        make,
        model,
        imageUrl,
        type,
        seat,
        carLocation,
        fuelType,
        rent,
        mileage
      };
      axios
        .put(url + "/admin/editcar", car, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Printing product data", response.data);
          history.goBack();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      const car = {

        make,
        model,
        imageUrl,
        type,
        seat,
        carLocation,
        fuelType,
        rent,
        mileage
      };
      console.log(car);
      axios
        .post(url + "/admin/addcar",car, {headers: { authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Printing car data", response.data);
          history.goBack();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle regback">
      <div className="container position-absolute top-50 start-50 translate-middle regform">
        <div className="p-5 text-black fw-bold">
          <h1>Car Details</h1>
          <div className="row">
            <div className="mb-3 col px-5">
              <label htmlFor="make" className="form-label">
                Make
              </label>
              <input
                type="text"
                className="form-control"
                id="make"
                value={make}
                onChange={(e) => {
                  setMake(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col px-5">
              <label htmlFor="make" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                id="model"
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col px-5">
              <label htmlFor="url" className="form-label">
                Image Url{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="url"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <label htmlFor="type" className="form-label">
                Car Type
              </label>
              <select
                name="type"
                id="type"
                className="input-fields-mod form-control"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="" hidden>
                  Choose category
                </option>
                <option value="HATCHBACK">HatchBack</option>
                <option value="SUV">SUV</option>
                <option value="SEDAN">Sedan</option>
                <option value="MPV">MPV</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <label htmlFor="loc" className="form-label">
                CarLocation
              </label>
              <input
                type="text"
                className="form-control"
                id="loc"
                value={carLocation}
                onChange={(e) => {
                  setCarLocation(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col px-5">
              <label htmlFor="rate" className="form-label">
                Rent
              </label>
              <input
                type="number"
                className="form-control"
                id="rent" placeholder="in rupees ₹"
                value={rent}
                onChange={(e) => {
                  setRent(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <label htmlFor="seat" className="form-label">
                No of seats
              </label>
              <input
                type="text"
                className="form-control"
                id="seat"
                value={seat}
                onChange={(e) => {
                  setSeat(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col px-5">
              <label htmlFor="ftype" className="form-label">
                Fuel Type
              </label>
              <input
                type="text"
                className="form-control"
                id="ftype"
                value={fuelType}
                onChange={(e) => {
                  setFuelType(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col px-5">
              <label htmlFor="mileage" className="form-label">
                Mileage
              </label>
              <input
                type="text"
                className="form-control"
                id="mileage"
                value={mileage}
                onChange={(e) => {
                  setMileage(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HandleAddProduct}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddCar;
