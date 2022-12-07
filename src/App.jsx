import Navbar from "./components/Navbar";
import data from "./travel_data";
import Card from "./components/card";

function App() {
  const cardSection = data.map((data) => {
    return <Card {...data} key={data.key} />;
  });

  return (
    <>
      <Navbar />
      {cardSection}
    </>
  );
}

export default App;
