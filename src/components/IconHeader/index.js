import perfil from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
    margin-right: 40px;
    width: 25px
`
const Icons = styled.ul`
    display: flex;
    align-items: center;
`
const icons = [perfil, bag];


function IconHeader() {
    return (
    <Icons>
        {icons.map((icon) => (
            <Icon>
                <img src={icon} alt='icones'></img>
            </Icon>
        ))}
    </Icons>
)}

export default IconHeader