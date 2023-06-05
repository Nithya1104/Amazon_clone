import React from 'react';
import './Banner.css';
import banner from '../../Asserts/ama_banner.jpg';
import ListList from '../List/ListList';

export default function Banner() {
  return (
    <div className='ban'>
      <img src={banner} className='Banner' alt="banner" />
      <div className='Lists__'>
        <div className='Lists_list'>
          <ListList />
        </div>
      </div>
    </div>
  )
}
