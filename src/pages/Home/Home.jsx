import React, { useEffect, useState } from 'react'
import { useGetAllProductsQuery, useGetProductQuery } from '@/services/Api';
import { Button, Modal } from '@/components';
import toast from 'react-hot-toast';
import useFetch from '@/utils/hooks/useFetch';
import Input from '@/components/Shared/Inputs/Input';
import Dropdown from '@/components/Shared/Dropdown/Dropdown';
import { dropdownData } from '@/db/UserData';
import Switch from '@/components/Shared/Switch/Switch';
const Home = () => {
  const [modal, setModal] = useState(false);
  const { data, isError, isLoading, } = useGetAllProductsQuery();
  const { data: search } = useGetProductQuery('iphone')
  const { data: fetchData, loading, error, get } = useFetch();
  const [quantity, setQuantity] = useState(10);

const quantityHandler = (event) => {
  setQuantity(event.target.value);
}

  const modalHandler = () => {
    setModal(false)
  }
  
  // api wrapper
  const fetchHandler = async () => {
    await get('https://dummyjson.com/products');
    console.log(fetchData, loading, error)
  }
  // Switch Hanlder
  const handleSwitchChange = (id, isChecked) => {
    console.log(`Switch with ID ${id} is now ${isChecked ? 'checked' : 'unchecked'}`);
  };
  return (<>
    <div className="flex  gap-2 flex-col container mx-auto">
    <p className="">button</p>
    <Button style='primary'>Button</Button>
    <Button style='secondary' className='text-sm'>Button</Button>
    <Button style='small' className=''>Button</Button>
    <Button style='outline' className=''>Button</Button>
    <p>Input</p>
    <Input style='secondary' placeholder='hello world' label='input small' size='sm' />
    <Input style='secondary' placeholder='hello world' label='input medium' size='md' />
    <Input style='secondary' placeholder='hello world' label='input large' size='lg' />
    <Input style='secondary' placeholder='hello world' type='quantity' onChange={quantityHandler} label='Quantity' value={quantity} size='lg' />
    <p>search</p>
    <Input style='secondary' placeholder='search...' type='search' label='hello world' size='lg' />
    <Input style='secondary' placeholder='search...' type='search' label='hello world' size='md' />
    <Input style='secondary' placeholder='search...' type='search' label='hello world' size='sm' />
    <Dropdown data={dropdownData} />
    <Switch id="exampleSwitch" defaultChecked={true} onChange={handleSwitchChange} />
    
    </div>
  </>
  )
}

export default Home;
