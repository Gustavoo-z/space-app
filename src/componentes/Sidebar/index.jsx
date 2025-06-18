import styled from "styled-components";
import NavigationItem from "../NavigationItem";
import menuItems from "./menuItems";

const StyledSidebar = styled.aside`
    width: 250px;
    height: 300px;
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