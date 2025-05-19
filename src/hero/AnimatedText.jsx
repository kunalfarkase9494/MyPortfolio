import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <h2 style={{ 
         fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(70deg,rgb(188, 120, 78),rgb(102, 76, 188),rgb(142, 59, 181))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    }}>
      <TypeAnimation
        sequence={[
          "Java Full Stack Developer", 2000,
          "Flutter Developer", 2000,
          "Frontend Enthusiast", 2000,
          "Backend API Developer", 2000
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </h2>
  );
};

export default AnimatedText;
