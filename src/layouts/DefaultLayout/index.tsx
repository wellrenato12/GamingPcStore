import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer';
import { FooterTerms } from '../../components/FooterTerms';
import { Header } from '../../components/Header';
import { ContainerDefaultLayout } from "./styles";

export function DefaultLayout() {
    return (
        <ContainerDefaultLayout>
            <Header />
            <Outlet />
            <Footer />
            <FooterTerms />
        </ContainerDefaultLayout>
    )
}