import styled from "styled-components";

export const ComputerMaintenanceContainer = styled.div`
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
            margin-top: 1rem;
            width: 450px;
            height: 300px;
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