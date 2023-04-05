import { useState,useEffect} from "react";
import axios from "axios";
import useRazorpay from "react-razorpay";
import { url } from "./Common/constants";
import swal from 'sweetalert';

const AddressAndPaymentMethod = (props) => {
  const token = JSON.parse(localStorage.getItem("jwttoken"));
  const [fullName, setfullName] = useState("");
  const [contact, setcontact] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [line1, setline1] = useState("");
  const [line2, setline2] = useState("");
  const [paymentId, setpaymentId] = useState("");
  const [orderId, setorderId] = useState("");
  const [status, setstatus] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [fullnameErr, setFullNmaeError] = useState("");
  const [phoneNumberErr, setPhoneNumberError] = useState("");
  const [pincodeErr, setsetPincodeError] = useState("");

  const Razorpay = useRazorpay();
  // const [paymentMode, setpaymentMode] = useState("")
  const resetFormData = () => {
    setFullNmaeError("");
    setPhoneNumberError("");
    setsetPincodeError("");
  };

  useEffect(() => {
    init();
}, [])
const init = () => {
  setStartDate(localStorage.getItem("startDate"));
 
  setEndDate(localStorage.getItem("endDate"));
      

}
  const HandlePayment = () => {
    if (fullName !== "" && contact.length !== 9 && pincode !== "") {
      resetFormData();
      
      const car = props.carobj;
     
      const totalAmount = props.carobj.rent*localStorage.getItem("days");
      console.log(totalAmount);
      const order = {
        fullName,
        contact,
        city,
        state,
        pincode,
        line1,
        line2,
        totalAmount,
        paymentId,
        orderId,
        status,
        startDate,
        endDate,
        car
      };


      axios
        .post(url+"/customer/payment", order, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(" data", response.data);
          console.log(" data", response.data.id);
          console.log(" data", response.data.status);
          console.log("fff");
          if (response.data.status === "created") {
            let options = {
              key: "rzp_test_DGMZ4HkcUP9PIr",
              amount: response.data.amount,
              currency: "INR",
              name: fullName,
              description: "Order Payment",
              order_id: response.data.id,

              handler: function (response) {
                // setpaymentId(response.razorpay_payment_id);
                // setorderId(response.razorpay_order_id);
                // setstatus("paid");
               
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                console.log("payment successful");
               order.paymentId=response.razorpay_payment_id;
               order.orderId=response.razorpay_order_id;
               order.status="paid";

                axios.post(url+"/storebooking", order, {
                    headers: { authorization: `Bearer ${token}` }
                  });
                  console.log(order);
                  swal({
                    title: "Good Job!",
                    text:  "payment successfull your order place",
                    type: "success"
                    }).then(function() {
                    
                    window.location.href = "/";
                   
                    });
                
              },

              prefill: {
                name: fullName,
                email: "",
                contact: contact,
              },
              notes: {
                address: "",
              },
              theme: {
                color: "#3399cc",
              },
            };
            const rzp = new Razorpay(options);
            rzp.on("payment.failed", function (response) {
              console.log(response.error.code);
              console.log(response.error.description);
              console.log(response.error.source);
              console.log(response.error.step);
              console.log(response.error.reason);
              setpaymentId(response.razorpay_payment_id);
              setorderId(response.error.metadata.order_id);
              setstatus("failed");
              console.log(response.error.metadata.payment_id);
              console.log(response.error.metadata.order_id);
              console.log(order);
              swal("Failed", "Your Payment Failed ,Try Again", "error");


            });
            rzp.open();
          }
          if (response.data === "Insufficient Quantity") {
            alert("Insufficient Quantity");
          }
          if (response.data === "bad_Request") {
            alert("Wrong PAyment Details");
          }
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      fullName === "" && setFullNmaeError("*Enter valid Name");
      //   console;
      contact.length <= 9
        ? setPhoneNumberError("*Enter a 10 digit number")
        : contact === "" && setPhoneNumberError("*Enter valid phone number");
      pincode === "" && setsetPincodeError("*Enter valid pincode");
    }
  };

  return (
    <>
      <div className="container">
        <div className="p-5 text-black fw-bold">
          <h1>Add Delivery Address</h1>
          <div className="row">
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
                required
              />
              {fullnameErr && (
                <span style={{ color: "red" }}>{fullnameErr}</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Phone Number"
                value={contact}
                onChange={(e) => {
                  setcontact(e.target.value);
                }}
              />
              {phoneNumberErr && (
                <span style={{ color: "red" }}>{phoneNumberErr}</span>
              )}
            </div>
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="pincode"
                placeholder="Pincode"
                maxlength={6}
                value={pincode}
                onChange={(e) => {
                  setpincode(e.target.value);
                }}
              />
              {pincodeErr && (
                <span style={{ color: "red" }}>{pincodeErr}</span>
              )}
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="State"
                value={state}
                onChange={(e) => {
                  setstate(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                placeholder="City"
                onChange={(e) => {
                  setcity(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="line1"
                placeholder="House No. Building Name"
                value={line1}
                onChange={(e) => {
                  setline1(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col px-5">
              <input
                type="text"
                className="form-control"
                id="line2"
                placeholder="Road name,Area,Colony "
                value={line2}
                onChange={(e) => {
                  setline2(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={HandlePayment}
          >
            Proceed Payment
          </button>
        </div>
      </div>
    </>
  );
};
export default AddressAndPaymentMethod;
