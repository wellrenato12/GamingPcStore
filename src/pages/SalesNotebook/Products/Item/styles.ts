import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem 0;
    width: 300px;
    height: 380px;

    img {
        width: 200px;
        height: 150px;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: .75rem;
        margin-bottom: .5rem;
    }

    button {
        margin-top: 1.5rem;
    }
`