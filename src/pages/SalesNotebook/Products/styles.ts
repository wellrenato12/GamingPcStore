import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto auto auto;
    gap: 1rem;

    margin: 3rem 0;

    @media only screen and (max-width: 1280px) {
        grid-template-columns: auto auto auto;
    }

    @media only screen and (max-width: 1000px) {
        grid-template-columns: auto auto;
    }
`