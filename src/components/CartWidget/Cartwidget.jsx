import cart from '/cart.svg'
import "./cartwidget.css";

export const CartWidget = () => {
    return (
        <div>
            <a href="" target="">
                <img src={cart} className="cart" alt="cart" />
            </a>

            <p className='notification'>3</p>

        </div>
    )
}