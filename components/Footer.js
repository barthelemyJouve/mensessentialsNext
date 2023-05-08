const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-newsletter">
          <h2>Newsletter</h2>
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
