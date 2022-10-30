import styled from "styled-components";

export const NotebooksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0 3rem;

    border-bottom: 2px solid ${props => props.theme["black-500"]};

    div {
        div {
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
        img {
            margin-top: 2rem;
            width: 450px;
            height: 300px;
        }

        position: relative;
        div {   
            position: absolute;
            top: 8%;
            left: 9%;
        }
    }
    div {
        display: flex;
        gap: 1rem;

        h2 {
            font-size: 2.5rem;
        }
    }
`