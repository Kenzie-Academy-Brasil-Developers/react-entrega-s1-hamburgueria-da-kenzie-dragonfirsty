import Product from "../Product"
import './index.css';

export default function ProductList({produtos,HandleClick}){


    

    return(
        <ul className="Product-list">

            {produtos.map((produtos) =>(
                
                <Product produto={produtos} HandleClick={HandleClick} key={produtos.id} />
                
            ))}

        </ul>
    )
   
}