import styled from 'styled-components'
import img from '../../../assets/profile-img.png'

export const AvatarImage = styled.div`
    background-image: url('${props => props.src || img}'); 
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
    height: 197px;
    overflow: hidden;
    margin: 10px 5px;
`
