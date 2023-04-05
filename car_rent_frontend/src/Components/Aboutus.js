import "./Aboutus.css";
import { MDBContainer, MDBRow, MDBCol, } from 'mdbreact';
import Footer from './Footer/Footer';
import img12 from "../images/img12.jpg"
import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"
import img13 from "../images/img13.jpg"
import img19 from "../images/img19.jpg"




const Aboutus = () => {
  return (
    <div className='main'>
      <MDBContainer fluid>


        <MDBRow className='dynamic_text  d-flex align-items-center bg_about'>
          <h1 ><b>welcome to Let's GO</b></h1>
        </MDBRow>

        <MDBRow className='mb-3 text-center d-flex align-items-center '>
          <MDBCol size="5">
            <h1>Who are we </h1>
            <h3>What is our mission?</h3>
          </MDBCol>
          <MDBCol size="5">
            <p>
              Lets_Go is India’s largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.
              <br></br>
              <br></br>

              <h5>Safe, Sanitized Car Subscription You Can Count On</h5>
              Car subscription from Revv provides the flexibility of having a car anytime you want, as well as the assurance of a sanitized and virus free vehicle for your own self drive. The car sanitization process encompasses all the preventive hygiene best practices directed by the World Health Organization (WHO) and is diligently conducted for each vehicle delivered to the car subscribers.
            </p>
          </MDBCol>
        </MDBRow>

        <hr></hr>
        <hr></hr>

        <MDBRow className='mb-3 text-center d-flex align-items-center '>
          <MDBCol size="5">
            <h1>Why choose us </h1>
            <h3>How are we the best?</h3>
          </MDBCol>
          <MDBCol size="5" >
            <p>
              <h5>Unlimited KMs</h5>
              You must never stop exploring! That’s why you get unlimited KMs with every booking!
              <h5>No Paperwork</h5>
              Rent a car & start traveling with zero paperwork requirements! All you need in your driver’s license, national ID & a live selfie!
              <h5>Short-Duration</h5>
              Why pay for a full day when you need the car for only 8 hours? Zoomcar lets you rent a car for as low as 8 hours only!
              <h5>Long-Duration</h5>
              Don’t put a limit to your travel plans - our long-duration bookings are here for you. Remember, the longer you book for, the more you save!
            </p>
          </MDBCol>
        </MDBRow >

        <hr></hr>
        <hr></hr>

        <MDBRow>

          <div class="container pt-5 my-5 z-depth-1">
            <section class="p-md-3 mx-md-5 text-center text-lg-left">
              <h2 class="text-center mx-auto font-weight-bold mb-4 pb-2"><u>Our Team</u></h2>
              <p>We are a team of your and like minded people who have come together with a purpose of givingback to the farmers <br></br>
                who are the unspoken heroes. We wanted to support them and help
                them sell their produce.<br></br>
                We created a supply chain so that we buy the products from <br></br>them and sell to the end customers.</p>
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div class="p-4">
                    <div
                      class="avatar w-100 white d-flex justify-content-center align-items-center"
                    >
                      <img src={img10}
                        class="img-fluid rounded-circle z-depth-1"
                      />
                    </div>
                    <div class="text-center mt-3">
                      <h6 class="font-weight-bold pt-2">Prashant Nade</h6>
                      <p class="text-muted">
                        <small
                        ><i
                        >CDAC ACT, Pune</i
                          >
                        </small
                        >
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div class="p-4">
                    <div
                      class="avatar w-100 white d-flex justify-content-center align-items-center"
                    >
                      <img src={img11}
                        class="img-fluid rounded-circle z-depth-1"
                      />
                    </div>
                    <div class="text-center mt-3">
                      <h6 class="font-weight-bold pt-2">Saurabh Pawar</h6>
                      <p class="text-muted">
                        <small
                        ><i
                        >CDAC ACT, Pune</i
                          ></small
                        >
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div class="p-4">
                    <div
                      class="avatar w-100 white d-flex justify-content-center align-items-center"
                    >
                      <img src={img12}
                        class="img-fluid rounded-circle z-depth-1"
                      />
                    </div>
                    <div class="text-center mt-3">
                      <h6 class="font-weight-bold pt-2">Aniket Bedwal</h6>
                      <p class="text-muted">
                        <small
                        ><i
                        >CDAC ACT, Pune</i
                          ></small
                        >
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div class="p-4">
                    <div
                      class="avatar w-100 white d-flex justify-content-center align-items-center"
                    >

                      <img src={img13}
                        class="img-fluid rounded-circle z-depth-1"
                      />

                    </div>
                    <div class="text-center mt-3">
                      <h6 class="font-weight-bold pt-2">Pawan Barde</h6>
                      <p class="text-muted">
                        <small
                        ><i
                        >CDAC ACT, Pune</i
                          ></small
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div class="p-4">
                    <div
                      class="avatar w-100 white d-flex justify-content-center align-items-center"
                    >

                      <img src={img19}
                        class="img-fluid rounded-circle z-depth-1"
                      />

                    </div>
                    <div class="text-center mt-3">
                      <h6 class="font-weight-bold pt-2">Chaitanya Savdekar</h6>
                      <p class="text-muted">
                        <small
                        ><i
                        >CDAC ACT, Pune</i
                          ></small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </MDBRow>
        <Footer />
      </MDBContainer>
    </div>
  );
};
export default Aboutus;
