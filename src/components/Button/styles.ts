import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    border: none;
    border-radius: 8px;
    background-image: linear-gradient(to right, ${props => props.theme["blue-400"]} 60%, ${props => props.theme["blue-300"]});
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: .75rem 1rem;
    cursor: pointer;
`