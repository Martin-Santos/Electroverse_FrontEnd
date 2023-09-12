import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Header from "../header/header";
import TitleCart from "./CartTitle";
import  EmptyCartImg from "./EmptyCart"
import "./CartContent.css";

const CartContent = () => {
    const { cart } = useContext(dataContext);
    return (
        <>
        <Header/>
        <TitleCart/>
        {cart.length > 0 ? (
            <>
                <CartElements />
                <CartTotal/>
            </>
        ): (
            
            <EmptyCartImg/>
        )}
        </>
    )
};


export default CartContent;