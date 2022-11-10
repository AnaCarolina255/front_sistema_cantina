import React from "react";
import Menu from "../../components/common/Menu";
import "./styles.css";
import EmptyCart from "../../components/Cart/EmptyCart";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { connect } from "react-redux";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <div className="orders-menu">
            <Menu className="item" list={cartList} />
          </div>
          <div className="ticket">
            <h2 className="orders-heading">Seus Pedidos</h2>
            <h3 className="h3-format">Valor Pago</h3>
            <h3 className="h3-format">Troco</h3>
          </div>
          <h3 className="orders-total">Total R${cartTotal}</h3>
        </div>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
