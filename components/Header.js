const headerContent = {
  content: [
    {
      id: 1,
      Header1: "Home",
      description:
        "Welcome to Men's Essentials, your one-stop shop for men's fashion, grooming, and lifestyle. Our online store offers high-quality clothing and accessories, while our blog shares useful tips and advice to help you look and feel your best. Shop now and discover the tools you need to elevate your style and improve your life.",
    },
    {
      id: 2,
      Header1: "Blog",
      description:
        "Welcome to our blog a place where you can learn about the usefullness of our featured products",
    },
    {
      id: 3,
      Header1: "Shop",
      description:
        "Welcome to our shop, here you can find all the articles we recommend for you on our blog and websites",
    },
    {
      id: 4,
      Header1: "About us",
      description: "Learn more about our goals, missions and more",
    },
    {
      id: 5,
      Header1: "Contact",
      description:
        "If you have questions, if you want to suggest us a product reach us here we will answer as soon as possible",
    },
  ],
};

const Header = ({ id }) => {
  const header = headerContent.content.find((content) => content.id === id);
  return (
    <header>
      <div className="header-content">
        <div className="header-content-text">
          <h1>{header.Header1}</h1>
          <p>{header.description}</p>
        </div>
        <div className="header-button">
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
