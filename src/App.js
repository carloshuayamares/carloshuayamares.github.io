import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Carlos Huayamares",
    location: "Lima, PE",
    email: "carlos.huayamares.d@uni.pe",
    availability: "Open for work",
    brand:
      `
      I am passionate about technology, open to new development trends. I always give my best in my work to feel happy with myself and enjoy the usefulness that my development generates together with the work team.
      I have developed remote equipment configuration and management automations, REST integrations, data extraction and analysis, etc.
      `,
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
