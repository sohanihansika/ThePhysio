import React from 'react';
import doctor from '../IMG/doctor.jpg';
/*import logo image*/
import '../CSS/NewHome.css';

const NewHome = () => {
  return (
    <div>
      {/* Background section */}
      <section className="background-section">
        <div className="background-text">
          <h1>THEPHYSIO Clinic</h1>
          <h2>Your partner in physiotherapy and wellness</h2>
          <div className="btnrow">
            <a href="#" className="btn">Explore</a>
          </div> 
        </div>
      </section>

      {/* Doctors section */}
      <section class="home">
        <div class="topicdiv">
            <h1>Physiotheraphists</h1>
        </div>
        <div class="coaches">
            <div class="profiles">
                <div class="coachcard">
                    <a href="path/to/your/coachcard/1">
                        <div class="coach-img">
                        <div className="pic"><img src={doctor} className="img-fluid" alt="Doctor 1" /></div>
                        </div>
                        <div class="Name">Physiotheraphist 1</div>
                        <div class="Description">
                            Name: Hasini Hewa
                            Age: 33
                            Special: Neurological physiotherapy
                        </div>
                        

                    </a>
                </div>
                <div class="coachcard">
                    <a href="path/to/your/coachcard/2">
                        <div class="coach-img">
                        <div className="pic"><img src={doctor} className="img-fluid" alt="Doctor 1" /></div>
                        </div>
                        <div class="Name">Physiotheraphist 2</div>
                        <div class="Description">
                            Name: Hasini Hewa
                            Age: 33
                            Special: Neurological physiotherapy
                        </div>
                    </a>
                </div>
                <div class="coachcard">
                    <a href="path/to/your/coachcard/2">
                        <div class="coach-img">
                        <div className="pic"><img src={doctor} className="img-fluid" alt="Doctor 1" /></div>
                        </div>
                        <div class="Name">Physiotheraphist 3</div>
                        <div class="Description">
                            Name: Hasini Hewa
                            Age: 33
                            Special: Neurological physiotherapy
                        </div>
                    </a>
                </div>
                <div class="coachcard">
                    <a href="path/to/your/coachcard/2">
                        <div class="coach-img">
                        <div className="pic"><img src={doctor} className="img-fluid" alt="Doctor 1" /></div>
                        </div>
                        <div class="Name">Physiotheraphist 4</div>
                        <div class="Description">
                            Name: Hasini Hewa
                            Age: 33
                            Special: Neurological physiotherapy
                        </div>
                    </a>
                </div>
                <div class="coachcard">
                    <a href="path/to/your/coachcard/2">
                        <div class="coach-img">
                        <div className="pic"><img src={doctor} className="img-fluid" alt="Doctor 1" /></div>
                        </div>
                        <div class="Name">Physiotheraphist 5</div>
                        <div class="Description">
                            Name: Hasini Hewa
                            Age: 33
                            Special: Neurological physiotherapy
                        </div>
                    </a>
                </div>
                <div class="coachcard">
                    <a href="path/to/your/coachcard/2">
                        <div class="coach-img">
                        <div className="pic"><img src={doctor} className="img-fluid" alt="Doctor 1" /></div>
                        </div>
                        <div class="Name">Physiotheraphist 6</div>
                        <div class="Description">
                                                      {/* add these 3 as 3 lines with line braek */}

                            Name: Hasini Hewa
                            Age: 33
                            Special: Neurological physiotherapy
                        </div>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="navigation">
            <button class="nav-button left">&#10094;</button>
            <button class="nav-button right">&#10095;</button>
        </div>
    </section>

      {/* ABOUT US section */}
      <div className="sec">
        <div className="tagrow">
          <h2>ABOUT US</h2>
        </div>
        <hr />
        <div className="box">
          {/* Clinic Information */}
          <div>
            <h4>Business Hours</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className='lead'><strong>Day</strong></th>
                  <th scope="col" className='lead'><strong>Hour</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className='lead'>Monday - Friday</th>
                  <td>9 a.m - 5 p.m</td>
                </tr>
                <tr>
                  <th scope="row" className='lead'>Saturday</th>
                  <td>9 a.m - 1 p.m</td>
                </tr>
                {/* Add more days if needed */}
              </tbody>
            </table>
          </div>
          {/* Services and Facilities */}
          <div className="mainbox">
            <div>
              <h4>Services Offered</h4>
              <ul>
                <li>Physical Therapy</li>
                <li>Sports Injury Rehabilitation</li>
                <li>Orthopedic Care</li>
                <li>Massage Therapy</li>
                {/* Add more services */}
              </ul>
            </div>
            <div>
              <h4>Facilities</h4>
              <ul>
                <li>Private Treatment Rooms</li>
                <li>Exercise Areas</li>
                <li>Parking Available</li>
                {/* Add more facilities */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FIND US HERE section */}
      <div className="sec">
        <div className="tagrow">
          <h2>LOCATE US</h2>
        </div>
        <div className="google-map">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9451852844486!2d79.8726168!3d6.897159900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ee2a2b0533%3A0xe2776ef7575a7845!2sThe%20Physio!5e0!3m2!1sen!2slk!4v1720498977765!5m2!1sen!2slk"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
      </div>

      {/* APPOINTMENT section */}
      <div className="sec">
        <div className="tagrow">
          <h2>BOOK AN APPOINTMENT</h2>
        </div>
        <div className="box">
          <div className="calander">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FColombo&showTitle=0&showDate=1&showPrint=0&showCalendars=0&mode=WEEK&src=Y2FpbmRvb3I0NEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdEBnbWFpbC5jb20&color=%23B39DDB&color=%23E6C8FD"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Booking Calendar"
            ></iframe>
          </div>
        </div>
      </div>

      {/* PRICING section */}
      <div className="sec">
        <div className="tagrow">
          <h2>PRICING</h2>
        </div>
        <div className="box4">
          <h3>Physiotherapy Pricing</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Consultation</td>
                <td>Rs. 2000</td>
              </tr>
              <tr>
                <td>Follow-up Session</td>
                <td>Rs. 1500</td>
              </tr>
              {/* Add more pricing rows */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="content">
          <div className="contentbox">
            <i className='bx bxl-facebook'></i>
            <a href="https://www.facebook.com/">Facebook</a>
          </div>
          <div className="contentbox">
            <i className='bx bxl-instagram'></i>
            <a href="https://www.instagram.com/">Instagram</a>
          </div>
          <div className="contentbox">
            <i className='bx bxl-twitter'></i>
            <a href="https://twitter.com/">Twitter</a>
          </div>
          <div className="contentbox">
            <i className='bx bxl-linkedin'></i>
            <a href="https://www.linkedin.com/">LinkedIn</a>
          </div>
          <div className="contentbox">
            <i className='bx bxl-youtube'></i>
            <a href="https://www.youtube.com/">YouTube</a>
          </div>
        </div>
        <div className="address">
          <p>123 Main Street, Colombo, Sri Lanka</p>
          <p>Email: info@thephysio.com</p>
          <p>Phone: +94 123 4567</p>
        </div>
      </footer>
    </div>
  );
};

export default NewHome;
