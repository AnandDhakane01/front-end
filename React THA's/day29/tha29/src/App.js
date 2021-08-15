import Card from './components/Card'
import "./styles.css";
import { useSelector } from "react-redux"

function App() {

  const theme = useSelector((state) => state.theme)
  console.log(theme)

  return (
    <div>
      <Card/> 
    </div>
  )

}


export default App