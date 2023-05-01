import { headerContent } from "@/utils/headerContent";
import Link from "next/link";

const Header = ({ id }) => {
  const header = headerContent.content.find((content) => content.id === id);
  return (
    <header>
      <Link className="header-title" href="/shop">
        <div className="header-title-container">
          <div className="header-title-top">
            <p>{header.title}</p>
            <h1>{header.Header1}</h1>
          </div>
          <div className="header-title-bottom">
            <div className="button-left">
              <p>SHOP</p> <h3>All products</h3>
            </div>
            <div className="button-right">
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </Link>
      <Link className="header-links-blog" href="/blog">
        <div className="header-links-blog-container">
          <div className="legend-icon">
            <p>Lot of usefull articles</p>
            <div className="icon">
              <i className="fa-solid fa-arrow-up-right-dots"></i>
            </div>
          </div>
          <h2>View our blog</h2>
        </div>
      </Link>
      <Link className="header-links-about" href="/about">
        <div className="header-links-about-container">
          <div className="legend-icon">
            <p>Discover our history</p>
            <div className="icon">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <h2>About us</h2>
        </div>
      </Link>
      <Link className="header-links-contact" href="/contact">
        <div className="header-links-contact-container">
          <div className="legend-icon">
            <p>Have some questions?</p>
            <div className="icon">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <h2>Contact</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
