import styled from 'styled-components';

const Navbar = styled.div `
    display: flex;
    justify-content: space-around;
    max-width: 1800px;
    margin: 0 auto;
    align-items: center;
    margin: 60px 0 60px 0;
`;


const MainMenu = styled.ul `
    display:flex;
    justify-content: space-between;
`;

const LiMenu = styled.li `
    margin-right: 30px;
    
    .menu-link & {
        color: #000;
    }

    &:hover {
        color: #D1A954;
    }
`;


const Header = () => {
    return ( 
        <Navbar>
            <img src="images/logo.svg" alt="logo"/>
            <MainMenu>
                <LiMenu><a class="menu-link" href="#">Главная</a></LiMenu>
                <LiMenu><a class="menu-link" href="#">SOFIT EVENT HOUSE</a></LiMenu>
                <LiMenu><a class="menu-link" href="#">МЕРОПРИЯТИЯ</a></LiMenu>
                <LiMenu><a class="menu-link" href="#">ТУРИСТАМ</a></LiMenu>
                <LiMenu><a class="menu-link" href="#">КЕЙТЕРИНГ</a></LiMenu>
                <LiMenu><a class="menu-link" href="#">ДЛЯ АГЕНТСТВ</a></LiMenu>
            </MainMenu>

            <a href="#"><img src="images/menu.svg" alt="hamburger menu"/></a>

        </Navbar>
     );
}
 
export default Header;