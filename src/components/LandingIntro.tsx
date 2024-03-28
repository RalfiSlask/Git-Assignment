interface IInformation {
  title: string;
  description: string;
}

const LandingIntro: React.FC<IInformation> = ({ title, description }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default LandingIntro;
