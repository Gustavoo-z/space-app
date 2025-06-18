import styled from "styled-components"

const StyledLi = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.isActive ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.isActive ? 'GhandhiSansBold' : 'GhandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

export default function NavigationItem({ ...props }) {
    return (
        <StyledLi {...props}>
            <img 
                src={props.isActive ? props.iconActive : props.iconInactive} 
                alt={props.label}                
            />
            <span>{props.label}</span>
        </StyledLi>
    )
}