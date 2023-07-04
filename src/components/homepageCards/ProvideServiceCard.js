import React from "react";
import "./ProvideServiceCard.css";
import "./ForCustomersCard.css"

export default function ProvideServiceCard() {
  return (
    <div>
      <p className="p service-header">
        For Those Who Provide
        <span className="purple-header"> Beauty Services </span>
      </p>
      <div className="container-prov-serv">
        <div className="row-prov-serv">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="card-prov-serv">
              <img
                className="card-img-top-prov-serv"
                src="https://www.prim-u.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fudvzxn7no754%2FctKImj1554zgR8i5AUC1g%2Fc950e426407adfb55b0e5ddef3529728%2FFreelancers.png&w=1920&q=100"
                alt="For Freelancers"
              ></img>

              <div className="prov-serv-overlay">
                <h2 className="prov-serv-text-overlay">For Freelancers</h2>
                <a href='/account/seller/primlancer-registration'><button className="btn prov-serv-btn-outline-primary" >Sign Up</button></a>
                {/* <button className="btn prov-serv-btn-outline-primary" >Sign Up</button> */}
              </div>

              <div className="card-body-prov-serv">
                <p className="card-text-prov-serv">
                  Connecting U to our network of customers. <br></br>Small
                  business? We want to offer U a big opportunity. Download the
                  Prim-U app and we’ll instantly give U access to thousands of
                  customers, salons, spas and guesthouses closest to U. So
                  simple. So mobile. So rewarding.
                </p>
              </div>
            </div>
          </div>



          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="card-prov-serv">
              <img
                className="card-img-top-prov-serv"
                src="https://www.prim-u.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fudvzxn7no754%2F3NInbqzkaw04WoL9h0Bl74%2F3d89ee69a9fb94984bb0ee960271d54c%2FSalons.png&w=3840&q=100"
                alt="For Salons / Spas"
              ></img>
              
              <div className="prov-serv-overlay">
                <h2 className="prov-serv-text-overlay">For Salons / Spas</h2>
                <a href="/account/seller/supplier-registration"><button className="btn prov-serv-btn-outline-primary">Sign Up</button></a>
                {/* <button className="btn prov-serv-btn-outline-primary">Sign Up</button> */}
                {/* <a className="btn prov-serv-btn-outline-primary" href="/account/seller/supplier-registration">Sign Up</a> */}
              </div>

              <div className="card-body-prov-serv">
                <p className="card-text-prov-serv">
                  The beauty platform that benefits U. <br></br>Prim-U makes
                  offering customers exceptional luxury at everyday prices easy.
                  We’ll make use of your under-utilised space and match U with
                  any beauty therapist U need – from massage therapists to
                  beauticians and hair stylists. It’s big businesses helping
                  small businesses gain even bigger opportunities. It’s a
                  win-win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
