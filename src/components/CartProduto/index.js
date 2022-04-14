import "./index.css";


export  function CartProduct({produtoCart,Remove}){

    let cartIdbtn = produtoCart.id + 10

    return(
        
        <li className='produtoCart-list-li'>
            <div className='produtoCart-list-card'>
                <img src={produtoCart.img} className='produtoCart-img'/>
                <div className='produtoCart-list-texts'>
                <h3 className='produtoCart-list-name'>{produtoCart.name}</h3>
                <p className='produtoCart-list-category'>{produtoCart.category}</p>
                </div>
                <button onClick={Remove} id={cartIdbtn += 1} className='produtoCart-list-btn'>Remover</button>
            </div>
        </li>
    
    )

}