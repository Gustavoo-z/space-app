import styled from "styled-components";
import NavigationItem from "../NavigationItem";

const menuItems = [
  {
    iconActive: "/icones/home-ativo.png",
    iconInactive: "/icones/home-inativo.png",
    label: "Início",
    isActive: true
  },
  {
    iconActive: "/icones/mais-vistas-ativo.png",
    iconInactive: "/icones/mais-vistas-inativo.png",
    label: "Mais vistas",
    isActive: false
  },
  {
    iconActive: "/icones/mais-curtidas-ativo.png",
    iconInactive: "/icones/mais-curtidas-inativo.png",
    label: "Mais curtidas",
    isActive: false
  },
  {
    iconActive: "/icones/novas-ativo.png",
    iconInactive: "/icones/novas-inativo.png",
    label: "Novas",
    isActive: false
  },
  {
    iconActive: "/icones/surpreenda-me-ativo.png",
    iconInactive: "/icones/surpreenda-me-inativo.png",
    label: "Surpreenda-me",
    isActive: false
  }
];

const StyledSidebar = styled.aside`
    width: 212px;
    margin-left: 20px;
`

export default function Sidebar() {
    return (
        <StyledSidebar>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <NavigationItem key={item.label} {...item}>
                            {item.label}
                        </NavigationItem>
                    ))}
                </ul>
            </nav>
        </StyledSidebar>
    )
}