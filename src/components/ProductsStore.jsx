import React, { useState } from 'react'
import Card from './Cards'
import getData from '../products'

function ProductsStore() {
  let allData = getData();
  let [arr, setArr] = useState(allData);
  function showAll() {
    setArr([...allData]);
  }
  function showClothes() {
    let filtered = allData.filter(item => item.category.name == 'Clothes'); 
    setArr([...filtered]);
  }
    function showElctronics() {
    let filtered = allData.filter(item => item.category.name == 'Electronics'); 
    setArr([...filtered]);
  }

  function handleSearch(e) {
    let text = e.target.value.toLowerCase();
    let filtered = allData.filter(item => item.title.toLowerCase().includes(text));
    setArr([...filtered]);
  }

  return (
    <>
 <input type="text" placeholder="Search...." onChange={handleSearch} style={{ margin: '10px', padding: '10px' }}/>
      <div style={{ marginTop: '10px' }}>
        <button onClick={showAll}>All</button>
        <button onClick={showClothes}>Clothes</button>
                <button onClick={showElctronics}>Electronics</button>

      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: '20px' }}>
        {arr.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  )
}

export default ProductsStore;
