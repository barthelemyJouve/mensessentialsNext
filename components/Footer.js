import { useState } from "react";

const Footer = () => {
  // const [isBackgroundColorNormal, setIsBackgroundColorNormal] = useState(true);
  return (
    <footer
    // className={
    //   isBackgroundColorNormal ? "background-normal" : "background-vert"
    // }
    >
      <div className="footer-content">
        <div className="footer-menu">
          <div className="footer-menu-shop">
            <h3>Best Products</h3>
            {/* <button onClick={() => setIsBackgroundColorNormal(false)}>
              Change Bg Color
            </button>
            <button onClick={() => setIsBackgroundColorNormal(true)}>
              Restaure Bg Color
            </button> */}
            <ul>
              <li>Tongue Scrapper</li>
              <li>Push-up bars</li>
              <li>Derma Pen</li>
            </ul>
          </div>
          <div className="footer-menu-blog">
            <h3>Recent Articles</h3>
            <ul>
              <li>Tongue Scrapper</li>
              <li>Push-up bars</li>
              <li>Derma Pen</li>
            </ul>
          </div>
          <div className="footer-menu-about">
            <h3>About us</h3>
            <ul>
              <li>Our mission</li>
              <li>Importance of objects</li>
            </ul>
          </div>
          <div className="footer-menu-contact">
            <h3>Get in touch</h3>
            <ul>
              <li>+33154332815</li>
              <li>admin@mensessentials.com</li>
              <li>5001 MELROSE AVE, LOS ANGELES</li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <form action="#">
            <input type="email" placeholder="your@email.com"></input>
            <input type="submit" value="Suscribe"></input>
          </form>
        </div>
        <div className="footer-social-media">
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-tiktok"></i>
          </span>
          <span>
            <i className="fa-brands fa-facebook"></i>{" "}
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>{" "}
          </span>
        </div>

        <div className="copyright">
          <p>Men's Essentials &#169; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
