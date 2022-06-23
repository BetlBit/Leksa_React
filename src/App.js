import { useDispatch, useSelector } from "react-redux";
import './App.css';

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
				<div className="add-cat">
					<button className="btn" onClick={() => addCustomer(prompt())}> Добавить кота</button>
				</div>
				{customers.length > 0 ?
				<div className="visible">
					{customers.map(customer =>
						<div className="visible"> {customer.name}</div>
					)}
				</div>
				:
				<div className="count">
					клиенты нет
				</div>
				}
				
			</div>
		</div>
	);
}

export default App;