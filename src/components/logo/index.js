import logo from '../../images/logo.svg'
import styled from 'styled-components'

const Loggo = styled.div`
display: flex; /*permite que os itens fiquem disponibilizados na horizontal*/
font-size: 30px;
`

const LogoImage = styled.img`
margin-right: 10px;
`

function Logo() {
    return (
        <Loggo>
            <LogoImage 
                src={logo}
                alt='logo'/>
            <p><strong>My</strong>Books</p>
        </Loggo>
    )
}

export default Logo