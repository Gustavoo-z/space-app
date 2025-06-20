import styled from "styled-components";
import NavigationItem from "../NavigationItem";
import menuItems from "./menuItems";

const StyledSidebar = styled.aside`
  min-width: 240px;
  height: 300px;
`;

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
  );
}
