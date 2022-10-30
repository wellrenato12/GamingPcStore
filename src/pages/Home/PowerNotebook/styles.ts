import styled from "styled-components";

export const PowerNotebookContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-bottom: 2px solid ${props => props.theme["black-500"]};

    a {
        text-decoration: none;
    }

    div {
        position: relative;

        div {
           position: absolute; 
        }

        div:nth-child(2) {
            top: 43.5%;
            right: 53%;
        }
        div:nth-child(3) {
            top: 56%;
            right: 11%;
        }
        div:nth-child(4) {
            top: 70%;
            right: 48%;
        }  
    }
`