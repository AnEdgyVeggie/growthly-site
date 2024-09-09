import Header from "./components/Header";
import AboutContainer from "./components/AboutContainer";
import Conclusion from "./components/Conclusion";

function App() {

  const name = "Company"

  return (
    <div className="App">
      <Header name={name}/>
      <AboutContainer name={name} />
      <Conclusion  name={name}/>
    </div>
  );
}

export default App;
