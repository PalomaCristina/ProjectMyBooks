import Logo from '../logo'
import OptionsHeader from '../optionsHeader';
import IconHeader from '../IconHeader';
import styled from 'styled-components'

const Head = styled.header`
background-color: #fff;
display: flex;
justify-content: center;
`
function Header(){
    return (
        <Head>
        <Logo></Logo>
        <OptionsHeader/>
        <IconHeader></IconHeader>
        </Head>
    )
}

export default Header