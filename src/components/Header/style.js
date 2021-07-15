import styled from 'styled-components';

export const Navbar = styled.div `
    display: flex;
    justify-content: space-around;
    max-width: 1800px;
    margin: 0 auto;
    align-items: center;
    margin: 60px 0 60px 0;
`;


export const MainMenu = styled.ul `
    display:flex;
    justify-content: space-between;
`;

export const LiMenu = styled.li `
    margin-right: 30px;
`;

export const MenuLink = styled.a`
    color: #000;
    

    &:hover {
        color: #D1A954;
        }

    &.bordered {
        border: 1px solid #D1A954;
        color: #D1A954;
        padding: 7px 9px;
    }

`;
