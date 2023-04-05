import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";
const AdminPage = () => {
    const token=JSON.parse(localStorage.getItem("jwttoken"));
    const history = useHistory();
    const [user, setUser] = useState("");
    const [cars, setCars] = useState([])
    const HandleRemove=(id)=>{
        axios.delete(url + "/admin/carremove/"+id,{headers:{"authorization":`Bearer ${token}`}})
        .then(response => {
            console.log('Printing delete response', response.data);
            init();
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })
    }
    useEffect(() => {
        init();
      }, [])
    const init=()=>{
        axios.get(url + "/alladmincars",{headers:{"authorization":`Bearer ${token}`}})
        .then(response => {
            console.log('Printing cars data', response.data);
            setCars(response.data);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        });
        axios.get(url + "/getinfo",{headers:{"authorization":`Bearer ${token}`}})
        .then(response => {
            console.log('Printing product data', response.data);
            setUser(response.data);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        });
    }
   
    
    return (
        <>

            <div className="container">
                <div className="row">            
                    <div className="col">
                        <Link className="btn btn-primary fw-bold fs-4" to={"/addcar"}>Add Car</Link>
                    </div>
                </div>
                <div className="row g-1 my-3 fw-bold border">
                    <div className="col-2"></div>
                    <div className="col-4">Title</div>
                    <div className="col-1">Fuel Type</div>
                    <div className="col-1">rent</div>
           
                </div>
                {cars.map((item) => (
                    <div className="row g-1 border border-4" key={item.id}>
                        <div className="col-2"><img src={item.imageUrl} height={25} width={25} /></div>
                        <div className="col-4">{item.make} {item.model}</div>
                        <div className="col-1">{item.fuelType}</div>
                        <div className="col-1">{item.rent}</div>
                        <div className="col-2"><button className="btn btn secondary" onClick={()=>{history.push(`/addcar/${item.id}`)}}>Edit</button></div>
                        <div className="col-2"><button className="btn btn secondary" onClick={()=>{HandleRemove(item.id)}}>Remove</button></div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default AdminPage