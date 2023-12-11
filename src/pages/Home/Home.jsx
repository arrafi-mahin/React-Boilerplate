import React from 'react';
import Button from '@/components/Shared/Button/Button';
import Dropdown from '@/components/Shared/Dropdown/Dropdown';
import Input from '@/components/Shared/Inputs/Input';
import Switch from '@/components/Shared/Switch/Switch';
import { dropdownData } from '@/db/UserData';
import Modal from '@/components/Shared/Modal/Modal';
// import { useGetAllProductsQuery, useGetProductQuery } from '@/services/Api';
// import useFetch from '@/utils/hooks/useFetch';
import { useState } from 'react';
import Tooltip from '../../components/Shared/ToolTip/ToolTip';
const Home = () => {
  const [modal, setModal] = useState(false);
  // const { data, isError, isLoading, } = useGetAllProductsQuery();
  // const { data: search } = useGetProductQuery('iphone');
  // const { data: fetchData, loading, error, get } = useFetch();
  const [quantity, setQuantity] = useState(10);

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  }

  const modalHandler = () => {
    setModal(false)
  }

  // api wrapper
  // const fetchHandler = async () => {
  //   await get('https://dummyjson.com/products');
  //   console.log(fetchData, loading, error)
  // }
  // Switch Hanlder
  const handleSwitchChange = (id, isChecked) => {
    console.log(`Switch with ID ${id} is now ${isChecked ? 'checked' : 'unchecked'}`);
  };
  return (<>
    <div className="flex px-5  gap-2 flex-col container mx-auto">
      <p className="">button</p>
      <div className="flex gap-5 flex-wrap">
        <Button style='primary' className=' h-fit'>Primary</Button>
        <Button style='secondary' className='text-sm h-fit'>Secondary</Button>
        <Button style='small' className='h-fit'>Small</Button>
        <Button style='outline' className='h-fit'>Outline</Button>
      </div>
      <p>Input</p>
      <div className="flex gap-5 flex-wrap">
        <Input style='secondary' placeholder='hello world' label='input small' size='sm' />
        <Input style='secondary' placeholder='hello world' label='input medium' size='md' />
        <Input style='secondary' placeholder='hello world' label='input large' size='lg' />
        <Input style='secondary' placeholder='hello world' type='quantity' onChange={quantityHandler} label='Quantity' value={quantity} size='lg' />
      </div>
      <p>search</p>
      <div className="flex gap-5 flex-wrap">
        <Input style='secondary' placeholder='search...' type='search' label='hello world' size='lg' />
        <Input style='secondary' placeholder='search...' type='search' label='hello world' size='md' />
        <Input style='secondary' placeholder='search...' type='search' label='hello world' size='sm' />
      </div>
      <div className="flex gap-5 flex-wrap">
        <Dropdown data={dropdownData} />
        <Switch id="exampleSwitch" defaultChecked={true} onChange={handleSwitchChange} />
        <Button style='small' onClick={()=> setModal(true)} className='h-fit w-fit'>Modal</Button>
        <Modal show={modal} onClose={modalHandler}>
            <p className="">Hello world</p>
        </Modal>
        <Tooltip information="hello world">ToolTip</Tooltip>
      </div>

    </div>
  </>
  )
}

export default Home;
