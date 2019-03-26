import React, { Component } from "react";
import PropTypes from "prop-types";

import "./spin-box.scss";

class SpinBox extends Component {
  constructor(props) {
    super(props);

    this.closeOnBlur = this.closeOnBlur.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("click", this.closeOnBlur, true);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.closeOnBlur, true);
  }

  closeOnBlur(e) {
    const { spinBoxVisible, hideCounter } = this.props;
    const { srcElement } = e;
    if (this.spinForm && !this.spinForm.contains(srcElement)) {
      if (spinBoxVisible) {
        hideCounter();
      }
    }
  }

  render() {
    const {
      addItemToCart,
      deductItem,
      product,
      hideCounter,
      itemsInCart
    } = this.props;

    return (
      <form
        className="product-list__items__grid__spinbox"
        ref={ref => (this.spinForm = ref)}
      >
        <button
          type="button"
          className="spinbox-down"
          onClick={e => deductItem(product)}
        >
          <i className="mdi mdi-minus" />
        </button>
        <div className="form-holder">
          <input
            className="cart-input form-control spinbox-input"
            value={itemsInCart(product)}
            onBlur={hideCounter}
            readOnly
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
          />
        </div>
        <button
          type="button"
          className="spinbox-up"
          onClick={e => addItemToCart(product)}
        >
          <i className="mdi mdi-plus" />
        </button>
      </form>
    );
  }
}

SpinBox.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  addItemToCart: PropTypes.func.isRequired,
  deductItem: PropTypes.func.isRequired,
  hideCounter: PropTypes.func.isRequired,
  spinBoxVisible: PropTypes.bool.isRequired,
  itemsInCart: PropTypes.func.isRequired
};

export default SpinBox;
