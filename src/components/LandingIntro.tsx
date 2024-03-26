interface IInformation {
  landingInfo: {
    title: string;
    description: string;
    quote: string;
  };
}

const LandingIntro: React.FC<IInformation> = ({ landingInfo }) => {
  const { title, description, quote } = landingInfo;

  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{quote}</p>
    </section>
  );
};

export default LandingIntro;
