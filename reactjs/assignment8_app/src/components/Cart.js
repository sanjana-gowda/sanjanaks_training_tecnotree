import React, { Component } from 'react';
import Title from './Title';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../Context'; 

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
    
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="cart"></Title>
                                    <CartColumn/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            );
                        }else{
                            return(
                                <EmptyCart/>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;