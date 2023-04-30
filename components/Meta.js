const { default: Head } = require("next/head");

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="@public/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Men's Essentials",
  description: "Men's Essentials gift ideas for yourself and the ones you love",
};

export default Meta;
