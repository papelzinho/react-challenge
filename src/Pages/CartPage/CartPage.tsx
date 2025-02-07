import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, List, Item, Info} from './CartPage.styles'

const CartPage = () => {

    const cartContext = useContext(CartContext);

    if(!cartContext){
        return <div>Erro</div>
    }

    const {cart, removeFromCart, clearCart} = cartContext;
        
   
    return (
        <Container>
            <h2>Seu Carrinho</h2>
            {cart.length === 0 ? (
                <p>Seu Carrinho esta vazio</p>
            ) : (
                <>
                    <List>
                        {cart.map(item => (
                            <Item key={item.id}>
                                <img src={item.image} alt="Imagem Produto"/>
                                <Info>
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                </Info>
                                <button onClick={() => removeFromCart(item.id)}>Remover</button>
                            </Item>
                        ))}
                    </List>
                    <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
                    <button>Finalizar Compra</button>
                    <button onClick={clearCart}>Limpar Carrinho</button>
                </>
            )}
        </Container>
    )
}

export default CartPage;