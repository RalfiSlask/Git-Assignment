import LandingIntro from './components/LandingIntro';
import Hobby from './components/Hobby';

function App() {
  const hobbies = ['Poker', 'Tennis', 'Programming', 'Git', 'Cherry Picking'];

  return (
    <>
      <LandingIntro
        title={'My hobbies'}
        description="Git assignment for my hobbies"
      />
      {hobbies.map((hobby, index) => {
        return <Hobby key={index} hobby={hobby} />;
      })}
    </>
  );
}

export default App;
