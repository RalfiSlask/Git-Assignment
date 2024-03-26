import LandingIntro from './components/LandingIntro';

function App() {
  const landingInformation = {
    title: 'Git Assignment',
    description: 'This is an assignment that is testing my git knowledge',
    quote: 'Be yourself, everyone else is already taken',
  };

  return (
    <>
      <LandingIntro landingInfo={landingInformation} />
    </>
  );
}

export default App;
