import React from 'react'
import image9 from '../components/images/image 9.png'
import image10 from '../components/images/image 10.png'
import image11 from '../components/images/image 11.png'
import image12 from '../components/images/image 12.png'
import image13 from '../components/images/image 13.png'
import image1 from '../components/images/Image (1).png'
import image2 from '../components/images/Image (2).png'
import image3 from '../components/images/Image (3).png'
import image4 from '../components/images/Image (4).png'
import image5 from '../components/images/asd (1).png'
import image6 from '../components/images/asd (2).png'
import image7 from '../components/images/asd.png'






const Home = () => {
  return (
    <div>
      <div className='landing'>
        <div className='container'>
            <h1>Get charged, <br /> anytime, anywhere</h1>
            <p>Introducing a revolutionary charging service that brings the <br /> power to you.</p>
        </div>
      </div>
      <div className='landing-2'>
        <img src={image9} alt="" />
        <img src={image10} alt="" />
        <img src={image11} alt="" />
        <img src={image12} alt="" />
        <img src={image13} alt="" />
      </div>

      <div className='landing-3'>
        <img src="https://s3-alpha-sig.figma.com/img/e55b/2de1/fafd497d2cddd4dbe3f6d23b2af7abba?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MaOiiJrLZvactbG1CbSIWTWWJuUCV86dDBjrRbqN5gg6p5EK0ePYcRwR0i4n3zkbou4xlOC5n1kfdMtmsOGN9HJf-H042YgBZP3-oCzgdU~8shW4F2lUF0K6LNg5Gove00JDTx5TOJmrC7dG40w30dAC0PrML5x6Hx3OfDYsTkIyyWqpUJwlPUupo3La-o0-oHGYDbP0SMxLLfyvlM9WRvAsu~mwJ1qXVgJgGqe3-k6GGRnvnmBAHskmO15pOXxGrHIXXqCUOCaDnf2mAslzseyz-HBtIKCBqKOS4YiHhrkrPCw2xDK-DaXlCBSjGbKVrPX7oRHGO8mQIn1cI8FEyA__" alt="" />
      </div>

      <div className='landing-4 py-5 '>
    <h3 className='mb-4'>Reliable Solution for Energy Delivery</h3>
    <h2 className=''>CHARGE ME NOW</h2>

       <div className='d-flex justify-content-end'>
       <div className='cards'>
       <img src={image3} alt="" />
       <h5 className='mt-3'>Convenience</h5>
       <p>Schedule a charging appointment at your preferred location, eliminating the hassle of searching for stations.</p>
     </div>
     <div className='cards'>
       <img src={image1} alt="" />
       <h5 className='mt-3'>Flexibility</h5>
       <p>Choose from various charging options to fit your needs, from quick top-ups to full charges.</p>
     </div>
       </div>

       <div className='d-flex justify-content-end mt-5'>
       <div className='cards'>
       <img src={image2} alt="" />
       <h5 className='mt-3'>Reliability</h5>
       <p>Experienced and certified experts to deliver safe and efficient charging for your electric vehicle.</p>
     </div>
     <div className='cards'>
       <img src={image4} alt="" />
       <h5 className='mt-3'>Sustainability</h5>
       <p>Use a clean and eco-friendly charging solution to reduce your carbon footprint.</p>
     </div>
       </div>

       <div className='parent mt-5'><div className='button'><p>Book a charge</p></div></div>

      </div>


      <div className='landing-5  container'>
      <div className='text-center my-5 pb-4'>
      <h2>Here’s how it works</h2>
      <h4>Get stared in 3 easy steps</h4>
      </div>
        <div className='d-flex justify-content-between'>
        <div className='text-center'>
        <img src={image7} alt="" />
        <h3>Download the App</h3>
        <p>Our user-friendly app is your charging control center.</p>
      </div>

        <div className='text-center'>
        <img src={image6} alt="" />
        <h3>Request charge</h3>
        <p>Select your location, desired service, and a time that works for you.</p>
      </div>

      <div className='text-center'>
      <img src={image5} alt="" />
      <h3>Get Charged</h3>
      <p>Our truck arrives on time and powers up your vehicle.</p>
    </div>
        </div>
      </div>


      <div className='landing-6 mt-5'>
      <h2>Get 24/7charging <br /> delivery service for up <br /> to $0.58/KWh</h2>
      <div className='button-2 mt-3'>Become a member</div>
      </div>

      <div className='landing-7 container py-5'>
        <div className='d-flex justify-content-between align-items-center'>
        <h3>Frequently Asked Questions</h3>
        <div className='button-3'><p>See more FAQs</p></div>
        </div>
        <div className='my-5 px-5 py-3 d-flex me'>
          <img src="https://s3-alpha-sig.figma.com/img/bb26/85c7/495288d3cbcf236d58ed267d1929844e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IqXAu8huXey9vX6fvXHR5Vw4-FydXqcbit6J8Y-HE5Uibnoi0Fe~zr6XO0DQTuA6zADOv5iKoP9jLnT39EAXAR4NpqgCxp9jocxL8QNcAy9KtvO28vQc6WdxEDvE1KSNyHCHcfvpoTA97y0zhPCqz6OGWKMYGaUF5db6a0JwfscuxE0ygPQ2m9Jflp1vPzCxBM0B3RT5OIkgp5F~nDsZEvYYS2~HcuGpdJmZ3X3f1wZLok3Obz6Jw4Hak05KMAsNwiI5V0pW~iGnOH2N-iG4VUQYbeR4C9pwt2daeoEB-7V6MhKbsY7MABJgT-BdvCQNSdGKsqO84HYk6svI24wAMQ__" alt="" />
          <div className='mx-5 faq'>
            <h4>1. How does the on-demand mobile charging service work?</h4>
            <p>Our on-demand service allows you to request a mobile charging unit to your location. Simply use our app or contact our customer support, and we'll bring the charging station to you.</p>
            <div className='rule '></div>
            <h5 className='my-4'>2. What types of charging stations do you offer?</h5>
            <div className='rule '></div>
            <h5 className='my-4'>3. Can I subscribe to a plan that suits my charging needs?</h5>
            <div className='rule '></div>
            <h5 className='my-4'>4. ⁠Is there a roadside assistance service available?</h5>
            <div className='rule '></div>
            <h5 className='my-4'>5. Can I request a mobile charging station anywhere?</h5>
            <div className='rule '></div>
          </div>
        </div>
      </div>

      <div className='landing-8'>
      <div className='sure d-flex justfy-content-between'>
      <div className='d-flex align-items-left justify-content-center flex-column form px-5'> 
      <h2>Join the Waitlist</h2>
      <p>Be among the first to experience the future of EV charging. Enter your email address and phone number to secure your spot.</p>
      <form action="" className=''>
        <input type="email" placeholder='Enter your email'/>
        <button type='submit'>Join waitlist</button>
      </form>
      </div>
        <img src="https://s3-alpha-sig.figma.com/img/a103/d332/85a7bbfc998c81bf3ab8edda650d85a6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHVr3bfl3a2EgFShvblYzWT28ZL6zKMaUdxkaaMK3xyaLaEO21PDS0AL-dNj2w8Gy1Ni9l~q69wBdwQ78icHebD0qoifINrf77d7RskO6fTCmRXGb3KUrmh1pvpuLDqOtg4zShnZr9jFFDc~ll4vVjQWjx2f8GrdKgPdVQE5eIc2YItfSR7gqvDH3nK9zHzd0M4Ygjj6RuO5~xvBpO0Jc5hVGLijAm3oQKDzJcJcwe46j3eWAzmoE3SceZ-jEOn--a7kjhYdLTaoGPghZy58Ba-DXv0SVLB6aZgrELfHj4n~M~9mOlVU7eT6K9km~ztnKTq-JcgrYRjOdooRmUW8-A__" alt="" />
        </div>
      </div>


    </div>
  )
}

export default Home
