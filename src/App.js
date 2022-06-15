import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)
	console.log(cash)

	const addCash = (cash) => {
		dispatch({ type: "ADD_CASH", payload: 5 })
	}

	const getCash = (cash) => {
		dispatch({ type: "GET_CASH", payload: 5 })
	}

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch({ type: "ADD_CUSTOMER", payload: customer })
	}

	return (
		<div className="App">
			<div>{cash}</div>
			<div>
				<button onClick={() => addCash()}>Пополнить</button>
				<button onClick={() => getCash()}> NO Пополнить</button>
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