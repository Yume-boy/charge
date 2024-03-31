import React from 'react'
import hero from '../components/images/36f618628ed410a53363bbf57832815e.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className='about'>
      <div className='about-1'>
        <img src={hero} alt="" className='hero' />
        <h2 className='text '>About Us</h2>
      </div>
      <div className='about-2  pt-5'>
        <div class="container ">
            <div class="row align-items-center">
                <div class="col-6 text-left left">
                <h4>Welcome to Charge Me Now Pioneers in Mobile EV Charging</h4>
                <p className='pt-3'>At Charge Me Now, we are on a mission to revolutionize the way people charge their electric vehicles, making sustainable and convenient energy accessible to everyone, anywhere. Our journey began with a vision to create a greener tomorrow, powered by cutting-edge technology and a passion for environmental responsibility.</p>
                </div>
                <div class="col-6 right text-center">
                    <img src="https://s3-alpha-sig.figma.com/img/c7f4/771f/f2a03864cb8cadfab9350208abfd8272?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~0ziicXDdQRpzWufR8nof7T8FQoahjGIKJ6YOtD9u0paTzkD~zYUzLuyxNEdZKAqKRkiTdYam-Nv7RVQY-6vTffJxL4~Ab-78wpPWNRfz7UGjqcmLoja9l6ptwTY5l7x6Dt5JU-Orf1IoHKURkdHPmC5G4IJQhg3r9HnGOjpvwoyKI49YrdxefNP2qONgQDtPsGZGyFn9sjo3gTULaRbyFFJ2ro2w0yo8a2gXPeMkeWeoN~pIYrYt24qfVf80hjK0lc4LYChUuiEc180NB3OXj~uGccTyWXfpiOqaAsT7a6ynrilPQ7EWwUJXN79ea1evrFTu78RsMS0eBCg1fZyw__" alt="" />
                </div>
                
            </div>
        </div>
      </div>

      <div className='about-3'>
      <h3>CHARGE ME NOW</h3>
      </div>

      <div className='about-4 pt-5 mt-5 px-3 d-flex justify-content-center'>
        <div>
        <h5>Our Mission</h5>
        <h3>Your Charge, Your way: Anytime,<br /> Anywhere you want it</h3>
       <p className='d-flex justify-content-center'>At Charge Me Now, we’re committed to creating a sustainable and convenient charging infrastructure for electric vehicles, empowering individuals to adopt cleaner transportation options and contributing to the global shift towards a greener future.</p></div>

       </div>
       <div class="container text-center mt-5">
        <div class="row align-items-center">
            <div class="col img">
            <img src="https://s3-alpha-sig.figma.com/img/fda8/82e8/3d78414f82b3808ade0cfe4681f2bf19?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A84bKi-9ethVBa4fM0NWQkqCa2mUU62unp1pv8~g4hWAyT15acKpNkBz7vtBrxubfb9Tqg8CDNic8ObAwjkrnVhfeiJltjCW990N8O22cXDpvg0fGcvn0Lgal3nvq~kucEaqdXd6A-XkdUejA00-p19DnVfE7WihaXtN0liORfsclYhfD-q3YGhrdXEqFzqPPWPb~bYOK~Z-gTjd7RSf5zr~N4d4J~hZmw7ybC0Sjg7u1dxpsCIrmsj~TRb-Rjfv8WNacfGwBFYb18zwSXG5BUBNJFpa4v2kRNlkvdurkGuTE7vK9H8B54Vy1eAKf11j3apH28CDYQz0rvBEFXh47A__" alt="" />
            </div>
            <div class="col img">
            <img src="https://s3-alpha-sig.figma.com/img/8cc9/739a/e6333fbf4d895a335c35797bd47319f9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FSKlvnhDeiLt3vjRw1S83fMMFLIPSrzNz~nxl-WGBK3rdujxaHLa3sdiUpWFXOf~~OpJwMCXqD3W06xTp4EhAZ4vzo61kkLbYrGVi3aZ9vBW6AFNH83LbRqLMnfuCrLo6PN00LbzPNh9M7G8zj1ZU0zPDKlY950wfCTSXb1pIilML1Zogfj8R8CODRdyEfugVfG-hLqE1tSwEI0BlM2vAucLT2RJV7DQ-k0LNl4PylAKFyhYk1Cz6PEiDT-x5NN3vtHIHHKPw81W-U5L0wv4WkkyOD1wi2l8dhTxCR9sVjnMauQG~9lnlg9S4Va2Ldaymap3TDmPSlG5va2UYAHJGw__" alt="" />
            </div>
            <div class="col img">
            <img src="https://s3-alpha-sig.figma.com/img/6e4f/35fa/6fa54046c475ecd9058704d0ee9ee2c1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oM6yEXTKeb2cwp7VmdOuOzn1Lv3E-ISVrcfvJvnily8NNXuNjal5zGOb8j2mGGYSLKdgHDzin0kKkP0n282Y3DGR6erwjA2X~2nW9gdQkpo-iHh~VSI6047~WJxZB-Pw5xMIhwMXzt19yOeMaP0ghLVPfq5Bh6UgX~pokE3-ZoEL4RxsGqS7BMgE43L8qwKCUJmwZWuaRIcE49xUaZ4tRjeFlU1J7EB2jc5y0GRxPAaSlrDasEPilf3PWG6~0QaldRSL2gSB6l-CxmfxpRKa9JKyBC9eAYxzqcb9i8hi1crfPks3Rqy-MGcZWTj27bgE~20O-Ic8G4GPMPJnDk7qWw__" alt="" />
            </div>
            <div class="col img">
            <img src="https://s3-alpha-sig.figma.com/img/6e5c/e524/5eee504479e4665c430dbbae3fbcb84f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bn0lScq73Sgi4PC~B1o5t5LihGh9MrbF-jTSj-6Rk58RfVQzC2~TtpsnaklSDuUK8H-w323xeA5-ZP8yQPAHy0ls-tKoGXAF2mN0A2qTgnn~gO46tv1IIFCbZNz6fYXdzTfqPLWjiTKLhRCGfvFd-FgYTQ4j0329efUmIcENHJwQA4-Scw8CkoKqacjBQLpG1~Yi27cA-jiiXkOGj-9Crksoov30MSAwLAfElNYAV6WKlCerZ9wxrXmdOqoeYiZu4SQ9IPuSqIggOn~Buc9~RU09jXpD3JcOS3PiycWvNIgbIHS4CCiA4QWr5hfSbZPHBtavZ448QMK~DLcMIUGvtg__" alt="" />
            </div>
            
        </div>
        </div>

        <div className='about-5  pt-5 mt-5'>
        <div class="container ">
            <div class="row align-items-center">
                <div class="col-6 text-left left">
                <h4>Who we are</h4>
                <p className='pt-3'>Established in 2024, we are a dedicated team of EV enthusiasts, and sustainability advocates committed to driving positive change in the transportation landscape. With a deep understanding of the evolving needs of electric vehicle owners, we set out to create a mobile charging service that brings charging infrastructure directly to your doorstep, ensuring that clean and convenient energy is always within reach.
</p>
                </div>
                <div class="col-6 right text-center">
                    <img src="https://s3-alpha-sig.figma.com/img/a162/a85d/b6aae48e8b74ace71a072e8cda9d5677?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=acKpmutvgWbzphMHulgrawJmZg~NBuYrVy0B2ed15N-i4oCSRICMQ2gCC4SSUc2e8JqtstDtZiUyqYBevZ~s4FoCYafAyC-AzbCeQUwaNNC1YHjGCTnn46V32w-PCSYvPlYXzTn0fxEGaol-Aiu7QPobveaoFqpaG5PUiZ5ha2G3BEA1hDFvdr6ED5n0oIqckiwtaJ3rRX~i4p5iqeHrPQZRbUtwB5gwHWNNoi8XHA9oxgea21~e-yx~M8x7ysxxbXgyvuhNkYo2BjQhO1eoj-jLveCkPLg-AaPjOeJDlq83ud2LyzntwvpcgR0uPc7L~GJqjxuC0ZZluTNcvUDD8Q__" alt="" />
                </div>
                
            </div>
        </div>
      </div>

      <div className='mt-5 pb-5 about-6 pt-2'>
        <h3 className=''>What sets us apart</h3>
        <div class="container ">
        <div class="row align-items-center">
        <div class="col-6 text-left left">
                <h4>On-Demand Convenience</h4>
                <p className='pt-3 text-left'>Our mobile charging service is designed to be on-demand, allowing you to request a charge wherever you are, whenever you need it. Whether you're at home, work, or exploring the city, we're here to power up your journey.</p>
                <div className='d-flex justify-content-end pt-5'>
                <div className='arrow rounded-circle mx-1'><FaArrowLeftLong /></div>
                <div className='arrow rounded-circle'><FaArrowRightLong /></div>
                </div>
                </div>
                <div class="col-6 right text-center">
                    <img src="https://s3-alpha-sig.figma.com/img/45d5/b709/6ee9f389c0c52d5a8f9b401b25907be4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRkY3iyXLGXtKtpN5DNOnA~Wo-dvvJOPISo05KLqSHB~2cdSs6BQ3a0WYmTak2xqNbvISLoyXe9wtOKrAtijJR077janpKrvD2jV9W-zGJEB1IFmNPuY6jxSwXbpq7u6k6kjcVQHoi8viJb351H7RU~d2juvmOG7vsmyr8M37p9Gr2rQCtiTpEnbj5ChJsEh5e-Y0ZsmuUMHWXbmA8pYLyiZxxcRs7GWiBv9f7qL3hDQgoQWd8NcUG25TMbd1ckthFmuMDXD56s23m~2isA1lASXGiGTLuKbBxIYT8uaDxvUV9Ac~byLnlVHvvXacEtZSRuMJy0O7TQoThRmOp7~Fw__" alt="" />

                    <div className='d-flex justify-content-end mt-3 lol'>
                    <div class="progress mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar w-25"></div>
                        </div>
                        <p className='pt-1 px-1'>1/3</p>
                    </div>
                </div>
            
        </div>
        </div>
      </div>
      <div className='about-7 py-4'>
          <h3 className='my-5'>Our Promise to you</h3>
          <div class="container text-center">
            <div class="row align-items-start  mt-5 py-3">
                <div class="col">
                <h4>Reliability</h4>
                <p>Your schedule is our priority. Request a charge at a time and location that suits you best.</p>
                </div>
                <div class="col">
                <h4>Flexibility</h4>
                <p>Count on us to deliver a reliable and efficient charging experience whenever you request our services.</p>
                </div>
                <div class="col">
                <h4>Environmental Impact</h4>
                <p>Join us in making a positive impact on the environment. Every charge with us contributes to a more sustainable future.</p>
                </div>
            </div>
            </div>
      </div>

      <div className='about-8 my-5 mx-5'>
      <div class="container ">
            <div class="row align-items-center">
            <div class="col-6 text-left left set-2">
                <h4>Come Join The Team</h4>
                <p className='pt-3'>Work with some of the best global talent to push a sustainable and convenient charging infrastructure for electric vehicles</p>
                </div>
                <div class="col-6 right set text-center">
                    <img src="https://s3-alpha-sig.figma.com/img/dd49/7c3b/8ef707da74b0f342c1b0b8daccf7e18b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imxBqKbsmjC931Ttunv-Nl859C40vEGbB3nHrVCZhrX1esJ-B0QyJlPDXmjWDHGY9kvMPGcSgLJlsvRXGcQ48E0pRsLAa7C2qcyjkC4ikMAbslCBi8xF8Hd~h6ZRn3WbzItO2J6ukYV5e7sNlrwLkeTl444zvPlwUWx1qNx1V0I5uvCzEFaB44V0R7FxgK5AzpCPQJ51d15YOOdjzWnMBzMwuQ56ngUmYjnmVMV0Q0RDYtFJiCpPxcs2vPzhALs7u0JFKVZji~8CulPrR1zWj5dKv~7nX9VMsev0VQ4wKvsNht3Vtyqz28HqaeZDoYgCl3FjPrsU~wGM1BU0J3ipfw__" alt="" />
                </div>
                
            </div>
            </div>
      </div>


    </div>
  )
}

export default About
