import React from "react";
import "./home.css";
import Navbar from "../Navebar/Navbar";
import Tropie from "../../IMages/tropie.png";
import Poster from "../../IMages/poster.png";
import Banner from "../../IMages/midBanner.png";

export default function Home() {
  return (
    <div className="H">
      <Navbar />
      <div className="HT">
        <div className="HT-L">
          <img src={Tropie} alt="tropie" />
        </div>
        <div className="HT-R">
          <div className="HT-1">
            <div className="HT1-1">
              <p>
                {" "}
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </p>
            </div>
            <div className="HT1-2">
              <dl>
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.{" "}
                </li>
              </dl>
            </div>
          </div>
          <div className="HT-2">
            <div className="HT2-1">
              <img src={Poster} alt="poster" />
            </div>
          </div>
          <div className="HT-3">
            {" "}
            <p>
              Government of India has awarded the{" "}
              <b> "National Energy Conservation Award 2018"</b>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="HM">
        <div className="HM-1">
          <p>
            {" "}
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.{" "}
          </p>
        </div>
        <div className="HM-2">
          <img src={Banner} alt="banner" />
          <p>
            {" "}
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </p>
        </div>
        <div className="Line"></div>
        <div className="HM-3">
          <div className="HM3-1">
            <p> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </p>
          </div>
          <div className="HM3-2">
            {" "}
            <div className="HM3-2-1">
              <div className="TB">
                {" "}
                <p>CHEMICALS & PROCESS</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>POWER</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>WATER & WASTE WATER</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>OILS & GAS</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>PHARMA</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>SUGARS & DISTILLERIES</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>PAPER & PULP</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>MARINE & DEFENCE</p>{" "}
              </div>
              <div className="TB">
                <p>METAL & MINING</p>
              </div>
              <div className="TB">
                <p>FOOD & BEVERAGE</p>
              </div>
            </div>
            <div className="HM3-2-2">
              <div className="TB">
                {" "}
                <p>PETROCHEMICAL & REFINERIES</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>SOLAR </p>{" "}
              </div>
              <div className="TB">
                <p>BUILDING</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>HVAC</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>FIRE FIGHTING</p>{" "}
              </div>
              <div className="TB">
                {" "}
                <p>AGRICULTURE & RESIDENTIAL</p>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="HF">
        <div className="HF-1">
          {" "}
          <div className="HF1-1">
            {" "}
            <i class="fa-solid fa-phone fa-xl"></i>{" "}
          </div>{" "}
          <p>Toll Free 1800 200 1234</p>
        </div>
        <div className="HF-2">
          <i class="fa-brands fa-facebook fa-xl "></i>{" "}
          <p>www.facebook.com/cripumps</p>{" "}
        </div>
        <div className="HF-3">
          <i class="fa-solid fa-globe fa-xl "></i> <p>www.crigroups.com</p>{" "}
        </div>
      </div>
    </div>
  );
}
