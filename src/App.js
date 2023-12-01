import Banner from './components/Banner'
import logo from './assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './components/ShoppingList'
import QuestionForm from './components/QuestionForm'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}

			<ShoppingList />
			<QuestionForm />



		</div>

		
	)
}

export default App