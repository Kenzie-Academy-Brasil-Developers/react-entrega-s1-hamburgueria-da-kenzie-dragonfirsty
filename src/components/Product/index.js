import './index.css';


export default function Product({produto,HandleClick}){


    return(

        <li className='Product-list-li'>
            <div className='Product-list-card'>
                <header className='Product-list-Header'>
                    <img src={produto.img} className='Product-list-img'/>
                </header>
                <h3 className='Product-list-name'>{produto.name}</h3>
                <p className='Product-list-category'>{produto.category}</p>
                <p className='Product-list-price'>R$ {produto.price}</p>
                <button onClick={HandleClick} id={produto.id - 1} className='Product-list-btn'>Adicionar</button>
            </div>
        </li>
    )


}


export function CartProduct({produtoCart,Remove}){

    let cartIdbtn = produtoCart.id + 10

    return(
        
        <li className='produtoCart-list-li'>
            <div className='produtoCart-list-card'>
                <img src={produtoCart.img} className='produtoCart-img'/>
                <h3 className='produtoCart-list-name'>{produtoCart.name}</h3>
                <p className='produtoCart-list-category'>{produtoCart.category}</p>
                <button onClick={Remove} id={cartIdbtn += 1} className='produtoCart-list-btn'>Remover</button>
            </div>
        </li>
    
    )

}


