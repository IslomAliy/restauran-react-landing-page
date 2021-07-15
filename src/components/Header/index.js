import { Navbar, MainMenu, LiMenu, MenuLink } from "./style";

const Header = () => {
    return ( 
        <Navbar>
            <img src="images/logo.svg" alt="logo"/>
            <MainMenu>
                <LiMenu><MenuLink className="bordered" href="#">Главная</MenuLink></LiMenu>
                <LiMenu><MenuLink href="#">SOFIT EVENT HOUSE</MenuLink></LiMenu>
                <LiMenu><MenuLink href="#">МЕРОПРИЯТИЯ</MenuLink></LiMenu>
                <LiMenu><MenuLink href="#">ТУРИСТАМ</MenuLink></LiMenu>
                <LiMenu><MenuLink href="#">КЕЙТЕРИНГ</MenuLink></LiMenu>
                <LiMenu><MenuLink href="#">ДЛЯ АГЕНТСТВ</MenuLink></LiMenu>
            </MainMenu>

            <a href="#"><img src="images/menu.svg" alt="hamburger menu"/></a>

        </Navbar>
     );
}
 
export default Header;