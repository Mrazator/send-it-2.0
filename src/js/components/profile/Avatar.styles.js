import styled from 'styled-components'
import img from '../../../assets/profile-img.png'

export const AvatarImage = styled.div`
    background-image: url('${props => props.src || img}'); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 170px;
    width: 170px;
    overflow: hidden;
    border-radius: 50%;
`
