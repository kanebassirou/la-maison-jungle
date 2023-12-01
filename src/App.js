import Banner from './components/Banner'
import logo from './assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './components/ShoppingList'

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function QuestionForm () {
	return <div>
<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Tapez votre texte' />
    <button type='submit'>Entrer</button>
</form>
</div>
}

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