//import './App.css';
import Header from './components/Header'
import styled from 'styled-components'

//o styled div é um componente estilizado que nos permite criar um "css" dentro do arquivo js
const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg, #02461c 35%, #34a056);

li {
  list-style: none
}
`
function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;


