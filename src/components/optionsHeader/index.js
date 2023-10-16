import styled from  'styled-components'

const Option = styled.li`
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
min-width: 120px;
`
const Options = styled.ul`
    display: flex;
`
const optionsText = ['CATEGORIAS', 'FAVORITOS' , 'SACOLA']

function OptionsHeader(){
    return (
        <Options>
        { optionsText.map( (texto, index) => ( //aqui estou navegando pela lista optionsText e apresentando na tela cada uma das posicoes
        <Option key={index}><p>{texto}</p></Option>
        ) ) }
        </Options>
    )
}

export default OptionsHeader;