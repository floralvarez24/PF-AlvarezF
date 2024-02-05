import { useState } from "react";

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
            <form onSubmit={handleConfirm} className="Form">
                <label className="label">
                    Nombre
                    <input 
                    className="input"
                    type="text" 
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    required
                    />
                </label>
                <label className="label">
                    Teléfono
                    <input 
                    className="input"
                    type="text" 
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    required
                    />
                </label>
                <label className="label">
                    Email
                    <input 
                    className="input"
                    type="text" 
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    required
                    />
                </label>  
                <div>
                    <button className="btn" type="submit">Confirmar compra</button>
                </div>
            </form>
        </div>
    )
}
export default OrderForm;