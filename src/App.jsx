import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contenedor from './components/Contenedor/Contenedor'

function App() {

  return (
    <>
      <NavBar/>

      <ItemListContainer greeting={'Bienvenidos a mi E-Commerce'}/>
    </>
  )
}

export default App
