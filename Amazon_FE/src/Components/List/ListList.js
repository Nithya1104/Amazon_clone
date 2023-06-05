import react, { useEffect } from 'react';
import './List.css';
import { useCart } from 'react-use-cart';
import { useContext } from 'react';
import { Context } from './List';


export default function ListList() {

    const { addItem } = useCart();

    const {lists,setList}=useContext(Context);

    const get = () => {
        fetch('http://localhost:5000/list')
            .then((response) => response.json()).then((data) => setList(data));
    }
    useEffect(() => {
        get();
    }, []);


    return <>
     <div className='ListOfItems'>
                {lists.map((item, index) =>
                    <div className='list'>
                        <div className='listbox'>

                            <img src={item.image} alt="fgh" className='list_img' />
                            <h1 className='txt'>{item.title}</h1>
                            <h2>{item.price}</h2>

                            <button className='addButton' onClick={() => { addItem(item) }}><center>Add To Cart</center></button>
                        </div>
                    </div>
                )}
                
            </div>
    </>
}