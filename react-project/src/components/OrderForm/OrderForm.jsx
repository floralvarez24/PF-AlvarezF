import { useState } from "react";
import './OrderForm.css'

const OrderForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name,
            phone,
            email
        }   
        onConfirm(userData)
    }

    return(
        <div className="Container">
            <h1>Checkout</h1>
            <form onSubmit={handleConfirm} className="Form">
                <label className="label">
                    Nombre
                </label>
                    <input 
                    className="input"
                    type="text" 
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    required
                    />               
                <label className="label">
                    Teléfono
                </label>
                    <input 
                    className="input"
                    type="text" 
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    required
                    />
                <label className="label">
                    Email
                </label> 
                    <input 
                    className="input"
                    type="text" 
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    required
                    /> 
                <div>
                    <button className="btn" type="submit">Confirmar compra</button>
                </div>
            </form>
            </div>
    )
}
export default OrderForm;