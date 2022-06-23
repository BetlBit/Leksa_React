import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
=======
import React from "react";
>>>>>>> Stashed changes

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
		<div className="App">
<<<<<<< Updated upstream
			<div>{cash}</div>
=======
>>>>>>> Stashed changes
			<div>
				<button onClick={() => addCustomer(prompt())}> Добавить клиента</button>
			</div>

			{customers.length > 0 ?
				<div>
					{customers.map(customer =>
						<div> {customer.name} </div>
					)}
				</div>
				:
				<div>
					клиенты нет
				</div>
			}
		</div>
	);
}

export default App;