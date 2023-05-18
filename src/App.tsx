
// Components
import HeaderCo from "../components/App/Header"
import Layer1 from "../components/LandingPage/Layer1"
import Layer2 from "../components/LandingPage/Layer2"
import Layer3 from "../components/LandingPage/Layer3"
import Layer4 from "../components/LandingPage/Layer4"
import FooterCo from "../components/App/Footer"

const App = () => {
  return (
    <div style={{ backgroundColor: "#1f2937" }}>
      <HeaderCo />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <FooterCo />
    </div>
  )
}

export default App