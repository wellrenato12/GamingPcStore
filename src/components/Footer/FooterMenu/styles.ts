import styled from "styled-components";

export const FooterMenuContainer = styled.div`
    display: flex;
    gap: 6rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        li {
            list-style: none;

            div {
                display: flex;
                gap: 2rem;
            }
        }

        a {
            text-decoration: none;
            color: ${props => props.theme.white};

            &:hover {
                color: ${props => props.theme["gray-300"]};
            }
        }
    }
`