import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Cats from './images/cat.png'

function App() {
	const dispatch = useDispatch()
	const customers = useSelector(state => state.customers.customers)

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch({ type: "ADD_CUSTOMER", payload: customer })
	}

	return (
		<div className="box">
			<div className="store">
				{/* СТИЛИЗАЦИЯ КНОПКИ */}
				<div className="add-cat"> 
					<button className="btn" onClick={() => addCustomer(prompt())}> Добавить кота</button>
					<button className="btn" onClick={() => addCustomer(prompt())}> Добавить кота</button>
				</div>
				
				{customers.length > 0 ?
				<div className="visible">
					{customers.map(customer =>
						<div> {customer.name} <img src={Cats}/> </div>
					)}
				</div>
				:
				<div className="count">
					клиенты нет
				</div>
				}
				{/* <div className="cube">
					<div className="top"></div>
					<div>
						<span style="--i:0;"></span>
						<span style="--i:1;"></span>
						<span style="--i:2;"></span>
						<span style="--i:3;"></span>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default App;