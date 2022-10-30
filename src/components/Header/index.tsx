import { Link } from 'react-scroll'
import { HeaderContainer } from "./style";
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../assets/LogoPower-Ai.png'

export function Header() {
    return (
        <HeaderContainer id="Home">
            <div>
                <NavLink to="/">
                    <img src={LogoIcon} alt="Logo" />
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/salesnotebook">
                            Notebooks
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/salesaccessories">
                            Acessórios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">
                            Serviços
                        </NavLink>
                    </li>
                    <li>
                        <Link to="Sobre" spy={true} smooth={true} offset={50} duration={500}>
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="Contato" spy={true} smooth={true} offset={50} duration={500}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}