import React from 'react'
import './table.css'
import TableData from '../Table/table';
// import Image from '../../Images/tableImg.png'

const data = [
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Pending', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
    { treatment: 'PRP Injections', thumbnail: 'https://cdn.pixabay.com/photo/2021/01/08/19/03/bird-5900657_1280.png',  date: '12/08/23', time: '09:00am', docter: 'Vihang Sharma', studio: 'Toorak', payment: 'Paid', details: 'btn' },
  ];
const Table = () => {
  return (
    <div className='table-container'>
      <TableData data={data} />
    </div>
  )
}

export default Table;