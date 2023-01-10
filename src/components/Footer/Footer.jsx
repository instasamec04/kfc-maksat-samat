// import { red } from "@mui/material/colors";
// import { color } from "@mui/system";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <>
      <div id="mid">
        <div>
          <div id="footer">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
              alt=""
            />
          </div>
          <div id="tel">
            <PhoneIcon id="tel-img" />
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="tel:+996703783830"
            >
              +996 (703) 78-38-30
            </a>
          </div>
        </div>
        <div id="info">
          <div>
            <h4 style={{ color: "#e4002b" }}>Информация</h4>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/about-us"
            >
              История
            </a>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/eleven-ingredients"
            >
              11 ингредиентов!
            </a>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/media/menu-allergens-ky.pdf"
            >
              Аллегрены
            </a>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/media/menu-allergens-ky.pdf"
            >
              Рестораны
            </a>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/page/halal"
            >
              Халяль
            </a>
          </div>
          <div>
            <h4 style={{ color: "#e4002b" }}>Нужна помощь?</h4>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/contact-us"
            >
              Свяжитесь с нами
            </a>
            <br />
            <a style={{ textDecoration: "none" }} href="https://fooddream.kg/">
              Карьера в KFC
            </a>
            <br />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.kfc.kg/page/terms-and-conditions"
            >
              Правила и условия
            </a>
          </div>
          <div>
            <h4 style={{ color: "#e4002b" }}>Подписывайтесь на нас</h4>
            <a href="https://www.instagram.com/kfc.kg/?hl=ru" target="_blank">
              <img
                style={{ width: "30px", marginLeft: "70px" }}
                src="	https://www.kfc.kg/admin/files/5174.svg"
                alt="instagram"
              />
            </a>
            <br />
            <a href="https://www.facebook.com/kfckg/" target="_blank">
              <img
                style={{ width: "30px", marginLeft: "70px" }}
                src="https://www.kfc.kg/admin/files/5173.svg"
                alt="FB"
              />
            </a>
          </div>
        </div>
        <div id="card">
          <img src="https://www.kfc.kg/admin/files/4697.jpeg" alt="" />
          <img
            src="https://www.akchabar.kg/media/cardtype/d4c86779-b368-4943-948a-434707533ff0.jpg"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e4002b",
        }}
      >
        <div id="blog2">
          <div id="footer-red">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.kfc.kg/page/privacy-policy"
            >
              Политика конфиденциальности
            </a>
            <br />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.kfc.kg/page/terms"
            >
              Правила и условия
            </a>
          </div>
          <div id="footer2">
            <p>
              © Copyright 2023
              <span>KFC.KG</span> All Rights Reserved.
            </p>
            <div id="footer3">
              <a href="https://play.google.com/store/apps/details?id=com.sirma.kfc&hl=ru&gl=US">
                <img
                  style={{ width: "75px" }}
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Logo.wine.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div id="footer5">
          <img
            style={{ width: "120px" }}
            src="https://www.kfc.kg/dist/images/stripes.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
