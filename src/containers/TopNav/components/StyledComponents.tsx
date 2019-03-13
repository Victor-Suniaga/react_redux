import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background: #282c34;
    position: fixed;
    left: 0px;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    height: 70px;
`


export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 15px 1rem;
    width: 100px;
    background: #2eb0d4;
    color: white;
    border: none;
    height: 40px;
    font-size: 17px;
    font-weight: 700;
    &:focus {
        box-shadow: none;
        outline: 0px;
    }
`