import styled from "styled-components";

export const ProductWarrantyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0 3rem;

    border-bottom: 2px solid ${props => props.theme["black-500"]};

    a {
        text-decoration: none;   
    }

    div {
        img {
            width: 450px;
            height: 370px;
        }
    }
`