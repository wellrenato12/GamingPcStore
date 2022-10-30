import { HomeContainer } from "./styles";
import { PowerNotebook } from './PowerNotebook'
import { Notebooks } from "./Notebooks";
import { ProductWarranty } from "./ProductWarranty";
import { ComputerMaintenance } from "./ComputerMaintenance";
import { Accessories } from "./Accessories";
import { CardsContent } from "./CardsContent";
import { Header } from "../../components/Header";

export function Home() {
    return (
        <HomeContainer>
            <PowerNotebook />
            <Notebooks />
            <ProductWarranty />
            <ComputerMaintenance />
            <Accessories />
            <CardsContent />
        </HomeContainer>
    )
}