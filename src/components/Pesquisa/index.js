import Input from '../Input/index'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './SearchData'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const ContainerSearch = styled.section`
background-image: linear-gradient(90deg, #02461c 35%, #34a056);
color: #FFF;
text-align: center;
padding: 85px 0;
height: 270px;
width: 100%;
`
const Title = styled.h2`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`

const SubTitle = styled.h3`
font-size: 16px;
font-weight: 500;
margin-bottom: 40px;
`
const Result = styled.div`
  flex: 0 0 auto; /* Impede o crescimento dos itens */
  padding: 0 10px; /* Espaçamento entre os itens */
  cursor: pointer;
  p {
    width: 200px;
    /* Estilos para o parágrafo */
  }
  img {
    width: 100px;
    /* Estilos para a imagem */
  }
  &:hover {
    border: 1px solid white;
  }
`;
const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 20px;
`;
export function Pesquisa() {
    const [TextSearch, setTextSearch] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    //   console.log(TextSearch)
    const itemsPerPage = 3; // Define quantos itens por página do carrossel

    const handleNext = () => {
        const nextIndex = currentIndex + itemsPerPage;
        if (nextIndex < TextSearch.length) {
            setCurrentIndex(nextIndex);
        }
    };

    const handlePrev = () => {
        const prevIndex = currentIndex - itemsPerPage;
        if (prevIndex >= 0) {
            setCurrentIndex(prevIndex);
        }
    };
    return (
        <ContainerSearch>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const writeText = evento.target.value
                    const resultText = livros.filter(livros => livros.nome.includes(writeText))
                    setTextSearch(resultText)
                }}
            />
            <CarouselContainer>
                {TextSearch.slice(currentIndex, currentIndex + itemsPerPage).map((livro, index) => (
                    <Result key={index}>
                        <p>{livro.nome}</p> 
                        <img src={livro.src} alt={livro.nome} />
                    </Result>
                    
                ))}
            </CarouselContainer>
            {TextSearch.length > itemsPerPage && (
                <>
                    <Button color="success" variant="contained" onClick={handlePrev} startIcon={<KeyboardDoubleArrowLeftIcon/>}>Anterior</Button>
                    <Button color="success" variant="contained" size='medium' onClick={handleNext} endIcon={<KeyboardDoubleArrowRightIcon/>}>Próximo</Button>
                </>
            )}
        </ContainerSearch>

    )
}

