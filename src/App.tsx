import Hobby from './components/Hobby';
import LandingIntro from './components/LandingIntro';

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
