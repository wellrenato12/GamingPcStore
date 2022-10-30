import styled from "styled-components";

export const SalesNotebookContainer = styled.main`
    border-bottom: 2px solid ${props => props.theme["black-500"]};
`

export const HomeNotebooks = styled.div`
    display: flex;
        flex-direction: column;
        text-align: center;
        
        margin: 5rem auto 0;
        width: 600px;

        h1 {
            margin-bottom: 2rem;
            font-size: 4rem;
        }

        p {
            font-size: 1.5rem;
            line-height: 2.5rem;

            span {
                background-color: ${props => props.theme.red};
                padding: .25rem;
                border-radius: 8px;
            }
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .25rem;

            margin-top: 2rem;
            text-decoration: none;
            color: ${props => props.theme["blue-300"]};
            transition: .5s;

            &:hover {
                color: ${props => props.theme["blue-400"]};
            }
        }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme["black-500"]};
    padding: 2rem 2rem 3rem 2rem;
    border-radius: 8px;
    margin-top: 5rem;

    div {
        width: 45%;

        h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        p {
            color: ${props => props.theme["gray-300"]};
            font-size: .90rem;
        }
    }

    @media only screen and (max-width: 1022px) {
        div {
            button {
                bottom: -50%;
            }
        }
    }
`

export const ImagesTitle = styled.div`
    display: flex;
    justify-content: space-around;

    img {
        width: 80px;
    }

    

    div {
        display: flex;
        align-items: center;
        gap: .25rem;

        p {
            font-size: 1.25rem;
        }
    }
`

export const ButtonSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 1rem;
    margin-top: 1rem;

    input {
        padding: .75rem 1rem;
        border: none;
        background-color: ${props => props.theme.white};
        border-radius: 8px 0 0 8px;
        width: 300px;
        background-color: ${props => props.theme["black-500"]};
        color: ${props => props.theme.white};
        border-bottom: 3px solid ${props => props.theme.white};

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${props => props.theme.white};
        }
    }

    span {
        color: ${props => props.theme["black-900"]};
        padding: .75rem 1rem;
        border: none;
        background-color: ${props => props.theme.white};
        border-radius: 0 8px 8px 0;
        background-color: ${props => props.theme["black-500"]};
        color: ${props => props.theme.white};
        border-bottom: 3px solid ${props => props.theme.white};
    }
`