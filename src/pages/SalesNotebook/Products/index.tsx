import { Item } from "./Item";
import { ProductsContainer } from "./styles";
import { v4 as uuidv4 } from "uuid";
import Notebook from '../../../assets/pcnote02.png'
import Notebook2 from '../../../assets/pcnote01.png'

interface ProductsProps {
    searchNotebook: string;
}

export function Products({ searchNotebook }: ProductsProps) {
    const listNotebooks = [
        {
            img: Notebook,
            name: 'Acer A315',
            processor: 'Intel',
            memory: '8gb ram',
            storage: '240gb SSD',
            id: uuidv4(),
        },
        {
            img: Notebook2,
            name: 'Acer 3000',
            processor: 'Intel 9ª geração',
            memory: '16gb ram',
            storage: '580gb SSD',
            id: uuidv4(),
        },
        {
            img: Notebook,
            name: 'ASUS',
            processor: 'I5',
            memory: '8gb ram',
            storage: '1tb HD',
            id: uuidv4(),
        },
        {
            img: Notebook2,
            name: 'ASUS',
            processor: 'I5',
            memory: '8gb ram',
            storage: '1tb HD',
            id: uuidv4(),
        },
        {
            img: Notebook,
            name: 'ASUS',
            processor: 'I5',
            memory: '8gb ram',
            storage: '1tb HD',
            id: uuidv4(),
        },
        {
            img: Notebook,
            name: 'Acer A315',
            processor: 'Intel',
            memory: '8gb ram',
            storage: '240gb SSD',
            id: uuidv4(),
        },
        {
            img: Notebook2,
            name: 'Acer 3000',
            processor: 'Intel 9ª geração',
            memory: '16gb ram',
            storage: '580gb SSD',
            id: uuidv4(),
        },
        {
            img: Notebook,
            name: 'ASUS',
            processor: 'I5',
            memory: '8gb ram',
            storage: '1tb HD',
            id: uuidv4(),
        },
    ]

    const filterForNotebooks = listNotebooks.filter((notebook) => {
        return notebook.name.toLowerCase().includes(searchNotebook)
    })

    return (
        <ProductsContainer>
            {filterForNotebooks.map((item) => {
                return (
                    <Item 
                        key={item.id} 
                        img={item.img}
                        name={item.name} 
                        processor={item.processor} 
                        memory={item.memory} 
                        storage={item.storage}
                    />
                )
            })}
        </ProductsContainer>
    )
}