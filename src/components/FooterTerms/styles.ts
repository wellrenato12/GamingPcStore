import styled from "styled-components";

export const FooterTermsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    margin-top: 2rem;

    div {
        img {
            width: 200px;
        }
    }

    div {
        display: flex;
        gap: 2rem;

        a {
            color: ${props => props.theme.white};
            text-decoration: none;

            &:hover {
                color: ${props => props.theme["gray-300"]};
            }
        }
    }
`