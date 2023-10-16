//import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import {Pesquisa} from './components/Pesquisa'

//o styled div é um componente estilizado que nos permite criar um "css" dentro do arquivo js
const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg, #02461c 35%, #34a056);

`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;


