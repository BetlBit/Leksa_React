import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { addCatAction, deleteCatsAll, removeCatAction } from "./store/catReducer";
import { Cat0, Cat1, Cat2, Cat3, Cat4, Cat5 } from "./images/Images"

let ArrCats = [Cat0, Cat1, Cat2, Cat3, Cat4, Cat5]
let Cat = ArrCats[Math.floor(Math.random() * ArrCats.length)];

function App() {
	const dispatch = useDispatch()
	const cats = useSelector(state => state.cats.cats)

	const addCat = (name) => {
		if (name !== '') {
			const cat = {
				name,
				id: Date.now(),
			}
			dispatch(addCatAction(cat))
		}
	}

	const removeCat = (cat) => {
		dispatch(removeCatAction(cat.id))
	}

	const deleteCats = () => {
		dispatch(deleteCatsAll(cats))
	}

	
	return (
		<div>

			<div className="store">
				{/* СТИЛИЗАЦИЯ КНОПКИ */}
				<div id="FullBtn">
					<button className="btn" onClick={() => addCat(prompt())}> Добавить кота</button>
					<button className="btn" onClick={() => deleteCats()}> Удалить все</button>
				</div>

				{cats.length > 0 ?
					<div>
						{cats.map(cat =>
							<div className="AddedCat" onClick={() => removeCat(cat)}>
								<div id="name">{cat.name}</div> <img id="ImgCat" src={Cat} alt="Img" />
							</div>
						)}
					</div>
					:
					<div className="count">
						Котов нет
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