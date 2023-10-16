import logo from '../../images/bookshelf.png'
import styled from 'styled-components'

const Loggo = styled.div`
display: flex; /*permite que os itens fiquem disponibilizados na horizontal*/
font-size: 30px;
`

const LogoImage = styled.img`
margin-right: 5px;
`

function Logo() {
    return (
        <Loggo>
            <LogoImage 
                src={logo}
                alt='logo'/>
            <p><strong>Lumus</strong>Library</p>
        </Loggo>
    )
}

export default Logo