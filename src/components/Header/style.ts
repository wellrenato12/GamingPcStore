import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 2rem;
    margin-bottom: 2rem;
    color: ${props => props.theme["gray-300"]};

    div {
        display: flex;
        img {
            width: 200px;
        }
    }

    nav {
        ul {
            display: flex;
            gap: 2rem;
            list-style: none;

            li {     
                color: ${props => props.theme.white};

                transition: .5s;

                a {
                    padding: .75rem 1rem;
                    text-decoration: none;
                    cursor: pointer;
                    transition: .5s;
                    color: ${props => props.theme.white};

                    &:hover {
                        border-radius: 8px;
                        color: ${props => props.theme.white};
                        background-color: ${props => props.theme["gray-500"]};
                        cursor: pointer;
                    }
                }    
            }
        }
    }
`