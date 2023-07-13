import mobile from "./img/mobile-app-pay-by-bank-new.jpg";
import send from "./img/money4.webp";
import pay from "./img/money9.webp";
import receive from "./img/money8.png";
import what from "./img/whatsapp.png";
import link from "./img/link.png";
import mail from "./img/mail.png";
import tele from "./img/tele.png";
import insta from "./img/insta.png";
import done from "./img/done.png";
import certi from "./img/certificate.jpg";
import inter from "./img/inter4.jpg";

import { useState } from "react";

export default function App() {
  const [isExchange, setIsExchange] = useState(false);
  const [isHam, setIsHam] = useState(true);
  function hanleExchange(e) {
    e.preventDefault();
    setIsExchange((isExchange) => !isExchange);
  }
  function handleHam() {
    setIsHam((isHam) => !isHam);
    console.log(isHam);
  }

  return (
    <div className="app">
      <Intro handleHam={handleHam} isHam={isHam} />
      <Platform />
      <Exchange hanleExchange={hanleExchange} isExchange={isExchange} />
      <Request />
      <Support />
      <Testimonial />
      <Footer />
    </div>
  );
}

function Intro({ handleHam, isHam }) {
  return (
    <div className="intro">
      <div className="head">
        <h2>Met Finance</h2>
        <ul className={`head-ul ${!isHam ? "show" : ""}`}>
          <li>Demos</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <button id="head-but">Download App</button>
        <Hamburger handleHam={handleHam} />
      </div>
      <div className="head-two">
        <div className="ht-left">
          <h1>We are building the future banking just for you </h1>
          <p>
            Transfer business money easily through finance app without any
            hassle .This app can help you control
          </p>
          <button>Check our features</button>
        </div>
        <div className="ht-right">
          <img src={mobile} />
          <div className="ht-right-sub1">
            <img src={done} width="30px" />
            <p>Completed Successfully</p>
            <h3>$780,000.00</h3>
            <p>Sent to the love of your life</p>
          </div>
          <div className="ht-right-sub2">
            <form>
              <p>Account</p>
              <input type="text" placeholder="account number" />
              <p className="bank">Bank</p>
              <input type="text" placeholder="select bank" /> <br></br>
              <button>Send Money</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hamburger({ handleHam, isHam }) {
  return (
    <div className="ham" onClick={handleHam}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Platform() {
  return (
    <div className="platform">
      <p>
        One platform for all your <b>International</b> payments
      </p>
      <div className="plats">
        <div className="plat one">
          <h2>Pay</h2>
          <p>
            Pay school fees, suppliers/vendors,bill. get value for your money at
            great rates
          </p>
          <img src={pay} width="200px" id="pay" />
        </div>
        <div className="plat two">
          <h2>Send</h2>
          <p>
            Sending money to your loved ones.Supporting friends abroad has never
            been easier
          </p>
          <img src={send} width="200px" id="send" />{" "}
        </div>
        <div className="plat three">
          <h2>Receive</h2>
          <p>
            Receive payments for services rendered or manage International
            transactions
          </p>
          <img src={receive} width="200px" />
        </div>
      </div>
    </div>
  );
}

function Exchange({ hanleExchange, isExchange }) {
  const [amount, setAmount] = useState();

  return (
    <div className="exchange">
      <div className="exchange-left">
        <div className="exchange-form">
          <div className="ex">
            <p>Exchange Rate</p>
            <button className="rate">$100 - #78,000</button>
          </div>
          <form onSubmit={hanleExchange}>
            <label>
              <p>Amount</p>
              <input
                type="text"
                placeholder="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <div className="to-fro">
              <label>
                <p>From</p>
                <select>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
              </label>
              <img src={inter} width="100px" id="inter" />
              <label>
                <p>To</p>
                <select>
                  <option>NIG</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
              </label>
            </div>
            <button>Convert</button>
          </form>
        </div>
        {isExchange && (
          <div className="success-exchange">
            <img src={done} width="30px" />
            <p>Conversion Successful</p>
            <h3>{amount}</h3>
            <p>You have deposited the sum to your account</p>
          </div>
        )}
      </div>
      <div className="exchange-right">
        <h1>Instant currency exchange</h1>
        <p>
          Enjoy quick and efficient online foreign exchange transactions.Say
          goodbye to bank queues and disappointments
        </p>
        <button>Explore now</button>
      </div>
    </div>
  );
}

function Request() {
  return (
    <div className="request">
      <div className="request-left">
        <h1>Receive or request money</h1>
        <p>
          Send money requests or share a payment link for your friends and even
          customers to pay via bank transfers,cards and even mobile money
        </p>
        <button>Explore now</button>
      </div>
      <div className="request-right">
        <form className="rr-form">
          <div className="rr-one">
            <div>
              <h3>Ajiboye Ismail</h3>
              <p>Ishmaeldotun@gmail.com</p>
            </div>
            <p>$10,000</p>
          </div>
          <label className="rr-label">
            <p>Payment Link</p>
            <input
              type="text"
              placeholder="ajiboye/ismail/payment/$10000/sent"
            />
          </label>
          <p className="rr-on">Request Money</p>
          <p className="rr-op">
            Payment through request is charge $12,but good service is assured
          </p>
          <label className="rr-label">
            <p>Deposit Money</p>
            <input type="text" placeholder="deposit $3000 to BOA" />
          </label>
        </form>
        <div className="success-pay">
          <img src={done} width="30px" />
          <p>Conversion Successful</p>
          <h3>$10000000</h3>
          <p>You have deposited the sum to your account</p>
        </div>
        <div className="success-req">
          <div className="pay-pay">
            <p>Payment Request</p>
            <p>$10,000</p>
          </div>
          <p className="pay-req">
            Payment request wil take about 1 hour to finish up the process and
            then you can have your cash
          </p>
        </div>
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="support">
      <div className="request-right mar">
        <div className="image">
          <img src={what} width="80px" />
          <img src={link} width="80px" />
        </div>
        <img src={insta} width="80px" id="insta" />
        <div className="image">
          <img src={tele} width="80px" />
          <img src={mail} width="80px" />
        </div>
      </div>
      <div className="request-left sup">
        <h1>Support avaliable on all platforms</h1>
        <p>
          Send money requests or share a payment link for your friends and even
          customers to pay via bank transfers,cards and even mobile money
        </p>
        <button>Explore now</button>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="testimonial">
      <h2>Testimonial</h2>
      <p>Hear what our users are saying about us</p>
      <div className="test-flex">
        <Testimon />
        <Testimon />
        <Testimon />
      </div>
    </div>
  );
}

function Testimon() {
  return (
    <div className="test">
      <p>
        {" "}
        Send money requests or share a payment link for your friends and even
        customers to pay via bank transfers,cards and even mobile money
      </p>
      <div className="test-img">
        <img src={certi} width="50px" />
        <div className="user-det">
          <h3>Ajiboye Ismail</h3>
          <p>Director</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="foot feet">
        <h2>Met Finance</h2>
        <p>
          Send money requests or share a payment link for your friends and even
          customers to pay via bank transfers,cards and even mobile moneySend
          money requests or share a payment link for your friends and even
          customers to pay via bank transfers,cards and even mobile money
        </p>
      </div>
      <div className="foot">
        <h2>Quick Links</h2>
        <p>Course Overview</p>
        <p>Testimonial</p>
        <p>Blog</p>
        <p>Events</p>
      </div>
      <div className="foot">
        <h2>Contact Us</h2>
        <p>Ishmaeldotun@gmail.com</p>
        <p>+2347063684723</p>
      </div>
      <div className="feeter">
        <p>Get the app now and make your transctions seamlessly</p>
        <button>Download App</button>
      </div>
    </div>
  );
}
