
import { CgProfile } from 'react-icons/cg'

import { Link } from 'react-router-dom';
import logo from "../../images/letsgo.jpg"

import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { url } from '../Common/constants';
import axios from 'axios';
import swal from 'sweetalert';
const Navbar = () => {
    const history = useHistory();

    const [profiles, setprofiles] = useState("")
   
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const [loginbutton, setloginbutton] = useState("");

    const HandleAdmin = () => {
        if (token) {
            axios.get(url + "/getinfo", {
                headers: { authorization: `Bearer ${token}` },
            })
            .then((response) => {
                console.log("Printing user data", response.data.role);
                if(response.data.role==='ADMIN'){
                    history.push("/adminpage");
                }else{
                    swal({title:"You are Not Allowed",icon:"warning"});
                }
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
        }
        else {
            history.push("/login")
        }
    }

    const HandleLoginLogout = () => {
        if (loginbutton === "Logout") {
            localStorage.clear();
            setloginbutton("Login/Register")
            setprofiles("");
            history.push("/")
        }
        else {
            history.push("/login")
        }
    }
    const init = () => {
        if (token) {
            axios.get(`${url}/getinfo`, { headers: { "authorization": `Bearer ${token}` } })
                .then(response => {
                    console.log('Printing product data', response.data);
                    setprofiles(response.data);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
            setloginbutton("Logout")
        }
        else {
            setloginbutton("Login/Register")
        }

    }
    useEffect(() => {
        init();
    }, [])

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container">
                <div className="navbar-brand" onClick={() => { history.push("/") }}>
                    <img src={logo} alt="" width="130" height="65" className="d-inline-block align-text-top" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="nav">
                     
                        <li className="nav-item">
                            <Link className="btn" to={"/aboutus"}>About us</Link>
                        </li>
                        <li className="nav-item justify-self-end">
                            <Link className="btn" to={"/contactus"}>Contact us</Link>
                        </li>
                        <li className="nav-item justify-self-end">
                            <Link className="btn" onClick={HandleAdmin}>Admin</Link>
                        </li>
                       
                        <li className="nav-item">
                            <button className=" btn btn-outline-secondary mx-3" onClick={HandleLoginLogout}>{loginbutton}</button>
                        </li>

                        <li className="nav-item">
                            <div className='fs-5'><CgProfile /></div>
                            <strong>Hello {profiles.firstName}</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;