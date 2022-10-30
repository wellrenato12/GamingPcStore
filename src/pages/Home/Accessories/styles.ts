import styled from "styled-components";

export const AccessoriesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: .5rem;
    border-bottom: 2px solid ${props => props.theme["black-500"]};

    a {
        text-decoration: none;   
    }

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .25rem;

        font-size: .70rem;
    }

    div {
        position: relative;

        div {   
            position: absolute;
            top: 25%;
            right: 15%;

            a {
                button {
                    display: flex;
                    align-items: center;

                    border: none;
                    border-radius: 12px;
                    background-image: linear-gradient(to right, ${props => props.theme["blue-400"]} 60%, ${props => props.theme["blue-300"]});
                    color: ${props => props.theme.white};
                    font-weight: bold;
                    padding: .5rem;
                    cursor: pointer;
                }
            }
        }
    }

    div {
        img {
            width: 450px;
            height: 370px;
        }
    }
`
