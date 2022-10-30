import { CaretRight, Plus } from 'phosphor-react';
import { Button } from '../../../components/Button';
import { ImgDefault } from '../../../components/ImgDefault';
import { TextDefault } from '../../../components/TextDefault';
import { NotebooksContainer } from "./styles";
import Notebook from '../../../assets/pcnote02.png'
import { NavLink } from 'react-router-dom';

export function Notebooks() {
    return (
        <NotebooksContainer id="Notebooks">
            <div>
                <ImgDefault src={Notebook} />
                <div>
                    <NavLink to="/salesnotebook">
                        <button>
                            <span>
                                <Plus size={20} weight="bold" />
                                Adquira
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>
            <TextDefault>
                <h2>Notebooks Semi-novos em ótimo estado</h2>
                <p>Vendemos notebooks seminovos em ótimo estado, todos revisados e testados, com 6 meses de garantia e nota fiscal.</p>
                <NavLink to="/salesnotebook">
                    <Button>
                        Acesse nossa Loja
                        <CaretRight size={14} weight="bold" />
                    </Button>
                </NavLink>
            </TextDefault>
        </NotebooksContainer>
    )
}