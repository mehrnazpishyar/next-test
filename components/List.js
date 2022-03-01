import React, { useState } from 'react';
import TodoList from './TodoList';
import { menu } from '../constants/constants';

const List = () => {
    const [list, setList] = useState("");
    const [items, setItems] = useState([]);


    function addList(e) {
        e.preventDefault();
        if (!list) {
        } else {
            setItems([...items, {text:list,id:Math.random(),completed:false}])
            setList('')
        }
    }
  return (
      <div className='text-center mt-20'>
          <form>
              <input className='mt-1 px-10 py-2 mx-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:ring-violet-500
     
     ' type="text" name="name" value={list} onChange={e => setList(e.target.value)} />
              <button onClick={addList} className="bg-violet-500 px-6 text-white py-2 rounded-md hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" type="submit" value="Submit">send</button>

          </form>
         
          <div className='ml-48'>
              {
                  items.map((item,index) => {
                      return (
                          <TodoList key={item.id} item={item} items={items} setItems={setItems} />    
                      )
                        
                      
                  })
              }
          </div>
    </div>
  )
}

export default List