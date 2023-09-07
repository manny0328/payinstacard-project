import React from 'react';
import './App.css';
import yourImage from './assets/imageStundent.jpg';
import ellipseImage from './assets/Ellipse 46.svg';
import SubtractImage from './assets/Subtract.svg';
import cardimage from './assets/cardimage.png';
import icons8 from './assets/icons8.png';
import cardimageone from './assets/card-image-one.png';
import cardimagetwo from './assets/card-image-two.png';

// ...


function App() {
  // Define a style object for the "Discover the beauty of the topics" paragraph
  const paragraphStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500', // Medium weight
    fontSize:'25px',
  };

  // Define a style object for the "Tropical" paragraph
  const boldParagraphStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '800', // Bold weight
    fontSize: '80px', // Increase font size
  };

  const mediumParagraphStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500', // Medium weight
    fontSize: '80px', // Increase font size
  };

  return (
    <div className="App">
      <header className="text-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-item nav-link active" href="#">Home</a>
              <a className="nav-item nav-link active" href="#">About</a>
              <a className="nav-item nav-link active" href="#">Schedules</a>
              <a className="nav-item nav-link active" href="#">Membership</a>
              <a className="nav-item nav-link active" href="#">Pricing</a>
            </div>
            <div className="ml-auto">
              <button className="btn btn mx-1 px-4" style={{ borderRadius: '20px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = 'orange'} onMouseOut={(e) => e.target.style.backgroundColor = ''}>Offers</button>
              <button className="btn btn mx-2 px-4" style={{ borderRadius: '20px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.target.style.backgroundColor = 'orange'} onMouseOut={(e) => e.target.style.backgroundColor = ''}>Courses</button>
            </div>
          </div>
        </nav>
      </header>
      
      <div className="content-container">
        
        <div className="content">
        <img src={ellipseImage} alt="Ellipse Image" />

          <p className="reduce-margin" style={paragraphStyle}>Discover the beauty of the topics</p>
          <p className="reduce-margin" style={boldParagraphStyle}>Tropical </p>
          <p className="reduce-margin" style={boldParagraphStyle}>Destinations</p>
          <p className="reduce-margin" style={mediumParagraphStyle}>For Students</p>
        </div>
        <div className="content-right">
          <img src={yourImage} alt="Your Image" />
        </div>
        
      </div>
      <div className='bio'>
      <p className='first-line'> Provide a valid, navigable address as the href value. If you cannot provide a valid href
      navigable address as the href value. If you cannot provide a valid href, but still</p>
      <button class="signup" className="btn btn mx-1 px-4" style={{ borderRadius: '20px', backgroundColor: " rgb(236, 113, 12)", color:'white' }}>Sign up</button>

      </div>
      <div className="content-rightz">
  <img src={SubtractImage} alt="SubtractImage" style={{ width: '10rem', height: '10rem', marginBottom:'2rem' }} />
</div>

<div class="allcards">
<div className="cards-container">
  <div className="card" style={{ width: '18rem', height: 'auto', marginBottom: '30px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
    <div className="card-body">
      <div className="row">
        <div className="col-md-3">
          <img src={require('./assets/avatar.png')} alt="Avatar" className="card-image" />
        </div>
        <div className="col-md-9">
          <div className="text-section">
            <h6 className="card-title fw-bold">Jhone whillam</h6>
            <p className="card-text card-text-small card-text-ellipsis">
              Some quick example text to build on the card's content. This is a longer text to demonstrate the width.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="card" style={{ width: '18rem', height: 'auto', marginBottom: '30px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
  <div class="card-body">
    <div class="row">
      <div class="col-md-3">
      <img src={require('./assets/avatar.png')} alt="Avatar" class="card-image" />      </div>
      <div class="col-md-9">
        <div class="text-section">
          <h6 class="card-title fw-bold">Jhone whillam</h6>
          <p class="card-text card-text-small card-text-ellipsis">
            Some quick example text to build on the card's content. This is a longer text to demonstrate the width.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="card" style={{ width: '18rem', height: 'auto', marginBottom: '30px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
  <div class="card-body">
    <div class="row">
      <div class="col-md-3">
      <img src={require('./assets/avatar.png')} alt="Avatar" class="card-image" />      </div>
      <div class="col-md-9">
        <div class="text-section">
          <h6 class="card-title fw-bold">Jhone whillam</h6>
          <p class="card-text card-text-small card-text-ellipsis">
            Some quick example text to build on the card's content. This is a longer text to demonstrate the width.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className='elli-one' >
  <img style={{ width: '30px', height: '30px', marginTop:'-3rem'}} src={ellipseImage} alt="Ellipse Image" />
</div>
<div className="text-container">



  <p className='text-title'>
    Tropical Adventure
    <p style={{ fontSize: '20px', marginBottom: '1px' }}>for Students</p>
    <p style={{ fontSize: '15px',fontWeight:' 500', marginBottom: '5px' }}>Student Tropical Vacation: Relax and Recharge</p>

  </p>
  <ul class="ul-text">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Massa quis natoque sit quam</li>
  <li>Eros non pellentesque elit</li>
  <li>tortor id euismod habitant</li>
  <li>Sed suspendisse id in ultrices</li>
</ul>
<br/>
<button className="btn btn-orange-bg ex-more">Explore More</button>
</div>
</div>
<br/>
<br/>
<div className='ourDestinations'>
<h4>Our Destinations</h4>

<div className="scrolling-cards-container">

<div className="d-flex flex-wrap">
    <div class="card" style={{ width: '14rem', borderRadius: '13px', height: '18rem', marginRight: '2rem' }}>
      <img src={cardimage} alt="cardimage Image" />
      <div class="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className='uni-name'>Harvard University</h6>
            <p style={{ fontSize: '11px' }}>Cambridge, Massachusetts, UK</p>
          </div>
          <img style={{ width: '13px', marginTop: '1rem' }} src={icons8} alt="icons8 Image" />
        </div>
      </div>
    </div>

    <div class="card" style={{ width: '14rem', borderRadius: '13px', height: '18rem', marginRight: '2rem' }}>
  <img src={cardimageone} alt="cardimageone Image" />
  <div class="card-body">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h6 className='uni-name'>Harvard University</h6>
        <p style={{ fontSize: '11px' }}>Cambridge, Massachusetts, UK</p>
      </div>
      <img style={{ width: '13px', marginTop:'1rem' }} src={icons8} alt="icons8 Image" />
    </div>
  </div>
</div>


<div class="card" style={{ width: '14rem', borderRadius: '13px', height: '18rem' , marginRight: '2rem' }}>
  <img src={cardimagetwo} alt="cardimagetwo Image" />
  <div class="card-body">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h6 className='uni-name'>Harvard University</h6>
        <p style={{ fontSize: '11px' }}>Cambridge, Massachusetts, UK</p>
      </div>
      <img style={{ width: '13px', marginTop:'1rem' }} src={icons8} alt="icons8 Image" />
    </div>
  </div>
</div>



<div class="card" style={{ width: '14rem', borderRadius: '13px', height: '18rem' , marginRight: '2rem' }}>
  <img src={cardimagetwo} alt="cardimagetwo Image" />
  <div class="card-body">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h6 className='uni-name'>Harvard University</h6>
        <p style={{ fontSize: '11px' }}>Cambridge, Massachusetts, UK</p>
      </div>
      <img style={{ width: '13px', marginTop:'1rem' }} src={icons8} alt="icons8 Image" />
    </div>
  </div>
</div>

<div id="image-container">
</div>

<br/>
<br/>


<div className="container">
  <div className="row">
    <div className="col-md-6" style={{marginTop:'10rem'}}>
    <img style={{width:'2rem'}} src={ellipseImage} alt="Ellipse Image" />
   
   
    <p>Get 20% off for student</p>
      <p className="text-title">
      Student discounts available.
        <p style={{ fontSize: '20px', marginBottom: '1px' }}>Get ready for some fun in the sun!</p>
        <p style={{ fontSize: '15px', fontWeight: '500', marginBottom: '5px' }}>Student Tropical Vacation: Relax and Recharge</p>
      </p>
      <ul className="ul-text">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Massa quis natoque sit quam</li>
        <li>Eros non pellentesque elit</li>
        <li>tortor id euismod habitant</li>
        <li>Sed suspendisse id in ultrices</li>
      </ul>
      <br />
      <button style={{marginBottom:'3rem'}} className="btn btn-orange-bg ex-more">Explore More</button>
    </div>
    <div className="col-md-6">
      <img src={require('./assets/girlimg.png')} alt="Avatar" className="card-image" />
    </div>
  </div>
</div>
<br/>
<br/>

<div>
<img style={{height:'22rem'}} src={require('./assets/girlimg-two.png')} alt="girlimg" className="card-image" />

</div>


<div>
<img src={require('./assets/Subtract -yellow.png')} alt="yellow" />

</div>

</div>
</div>
<div class='filling-form'>
<div class="col-md-6 ">
    <div class="card card-small custom-card">
    <p class="card-title custom-card-title">Book Now</p>
    <p class="card-text custom-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div class="form-group">
            <label class="lb" for="name">City:</label>
            <input type="text" class="form-control form-control-sm" id="name" name="name" />
        </div>
        <div class="row">
    <div class="form-group col-md-6">
        <label class="lb" for="arrival1">Arrival:</label>
        <input type="text" class="form-control form-control-sm" id="arrival1" name="arrival1" />
    </div>
    <div class="form-group col-md-6">
        <label class="lb" for="departure1">Departure:</label>
        <input type="text" class="form-control form-control-sm" id="departure1" name="departure1" />
    </div>
</div>


        <div class="row">
            <div class="form-group col-md-6">
                <label class="lb" for="star">Star:</label>
                <div class="input-group">
                    <button class="btn btn-secondary btn-sm" onclick="decrementStars()">-</button>
                    <input type="number" class="form-control form-control-sm" id="star" name="star" value="1" />
                    <button class="btn btn-secondary btn-sm" onclick="incrementStars()">+</button>
                </div>
            </div>
            <div class="form-group col-md-6">
                <label class="lb" for="rooms">Rooms:</label>
                <div class="input-group">
                    <button class="btn btn-secondary btn-sm" onclick="decrementRooms()">-</button>
                    <input type="number" class="form-control form-control-sm" id="rooms" name="rooms" value="1" />
                    <button class="btn btn-secondary btn-sm light-gray-button" onclick="incrementRooms()">+</button>
                </div>
            </div>
        </div>
        <br/>
        


        <button style={{width:'6rem', background:'black', color:'white'}} type="submit" class="btn btn btn-sm">Book Now</button>
    </div>
    </div>
</div>


<br/>
<br/>
<br/>


<p style={{
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '40px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  marginBottom:'5rem'
}}>Testimonials</p>


<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-3 mb-2">
      <div class="card small-card border-0">
        <div class="image-container">
          <img class="card-img-top small-image" alt="Card image cap" src={require('./assets/Ellipse-men.png')} />
        </div>
        <div class="card-body text-center">
          <p class='text-center' style={{ fontSize: '13px', margin: '0' }}>Carla Press</p>
          <img src={require('./assets/Vectorline.png')}></img>

          <p style={{ fontSize: '10px' }} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-2">
      <div class="card small-card border-0">
        <div class="image-container">
          <img class="card-img-top small-image" alt="Card image cap" src={require('./assets/Ellipse-men.png')} />
        </div>
        <div class="card-body text-center">
          <p class=' text-center' style={{ fontSize: '13px', margin: '0' }}>Jakob Aminoff</p>
          <img src={require('./assets/Vectorline.png')}></img>

          <p style={{ fontSize: '10px' }} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-2">
      <div class="card small-card border-0">
        <div class="image-container">
          <img class="card-img-top small-image" alt="Card image cap" src={require('./assets/Ellipse-men.png')} />
        </div>
        <div class="card-body text-center">
          <p class="text-center" style={{ fontSize: '13px', margin: '0' }}>Corey Korsgaard</p>
          <img src={require('./assets/Vectorline.png')}></img>

          <p style={{ fontSize: '10px' }} class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

<div class='text-center'>
<h3 >Student Special: Discounted rates <br/> on tropical getaways!</h3>
<br/>
<p >Let’s embody your beautiful ideas together, simplify <br/>the way you visualize your next big things.</p>

<div class="container d-flex justify-content-center">
  <nav class="navbar navbar-expand-lg navbar-light bg-light conditions">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Privacy Policy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Terms of Use</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sales and Refunds</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Legal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Schedules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Membership</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Joins</a>
        </li>
      </ul>
    </div>
  </nav>
</div>



</div>
 
    </div>

 </div>

  );
}

export default App;