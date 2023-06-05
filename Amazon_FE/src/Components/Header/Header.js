import React, { useContext, useEffect, useState } from 'react';
import './Header.css';

import amazonImg from '../../Asserts/amazonImg.png';
import searchs from '../../Asserts/search.svg';
import cart from '../../Asserts/cart.png';
import { Context } from '../List/List';
import { Contexts } from '../MyCart/MyCart';


export default function Header({ Navigation }) {

    const {lists,setList}=useContext(Context);
    const {totalItems}=useContext(Contexts);

    //SEARCH
    const [search, setSearch] = useState("");

    //Updated lifecycle
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (!search) {
            return setList(lists);
        }
        const VAL = lists.filter((a) => a.title === search)
        setList(VAL);
    }, [search]);


    return <div className='header'>
        <img src={amazonImg} alt='amazonImg' className='amazonImg' />

        <div className='search'>
            <input type='text' placeholder='search.....' className='searchbar' value={search} onChange={handleChange}/>
            <img src={searchs} alt='searchs' className='searchicon' />

        </div>
        <div className='sign_in'>
            <button className='sign__in' onClick={() => Navigation('/Signin')}>Hello Guest<br />signIn</button>
        </div>
        <div className='return' onClick={()=>Navigation('/List')}>
            <h4>List</h4>
            <h4>of Items</h4>
        </div>
        <div className='prime'>
            <h4>Your</h4>
            <h4>prime</h4>
        </div>
        <button className='cart_' onClick={() => Navigation('/MyCartCart')}>
            <img src={cart} alt="cart" height="45px" width="45px" />
    
            <p className='yellow'>{totalItems}</p>
        </button>
        <button onClick={() => Navigation(-1)}>
            <h4 className='prime' >Back</h4>
        </button>
    </div>
}
