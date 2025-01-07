import React, {useState} from 'react';

function Pricing(props) {
 
    const [productsList, setProductsList] = useState([]);
    const [productUser, setProductUser] = useState('');
    const [productMaker, setProductMaker] = useState('');
    const [productLoad, setProductLoad] = useState('');
    const [productMemory, setProductMemory] = useState('');

    function addProduct(){
        const newProduct ={
        
            productMaker:productMaker,
            productUser:productUser,
            productLoad:productLoad,
            productMemory:productMemory,
            
        }
   
        setProductsList(productsList=>[...productsList, newProduct]);
        setProductMaker('');
        setProductLoad(``);
        setProductUser(``);
      
    }
 
    function changeMaker(e){
        setProductMaker(e.target.value);
    }
    function changeUser(e){
        setProductUser(e.target.value);
    }
    function changeLoad(e){
        setProductLoad(e.target.value);
    }
    function changeMemory(e){
        setProductMemory(e.target.value);
    }
 
    function removeItem(indexEl){
        setProductsList(productsList=>productsList.filter((item, index)=>index != indexEl));
    }

    return (
        <div className='container '>
            <div className='row mb-3'>
                <div className="col-4 mx-auto">
                     
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeMaker}
                        value={productMaker} 
                        placeholder='Pricing' 
                        type="text" />
                    </div>
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeUser}
                        value={productUser} 
                        placeholder='User' 
                        type="text" />
                    </div>
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeLoad}
                        value={productLoad} 
                        placeholder='Memory' 
                        type="text" />
                    </div>
                    <div className='mb-3'>
                        <input 
                        className='w-100'
                        onChange={changeMemory}
                        value={productMemory} 
                        placeholder='setting center ' 
                        type="text" />
                    </div>
                     
                    <div>
                        <button className=' btn   w-100  ' onClick={addProduct}>
                            Add product
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8 mx-auto">
                <ul className="list-group">
                    {productsList.map((item, index)=>{
                        return <li 
                        key={index} 
                        className="list-group-item d-flex justify-content-between">
                              {item.productMaker} {item.productUser}{item.productLoad} {item.productMemory}   <button 
                            onClick={()=>removeItem(index)} 
                            className='btn btn-danger'>Delete</button>
                        </li>
                    })}
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Pricing;