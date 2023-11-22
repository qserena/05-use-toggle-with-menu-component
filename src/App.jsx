import Toggle from './Toggle/index'
import Menu from './Menu/index'
import Star from './Star'

function App() {
	/**
	 * Challenge: Refactor the Menu components to use the logic
	 * from Toggle instead of doing any logic of its own.
	 *
	 * 1. Remove all context and state logic from the menu components
	 * 2. Using Toggle and its "sub-components", add a menu to this
	 *    App component below the Star. Make sure to use a separate
	 *    <Toggle> wrapper so the state isn't tied to the Star's
	 *    Toggle state
	 */

	return (
		<>
			<Star onChange={() => {}} />

			<br />

			<Menu onOpen={() => console.log('Menu is opened.')}>
				<Menu.Button>Menu</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>Home</Menu.Item>
					<Menu.Item>About</Menu.Item>
					<Menu.Item>Contact</Menu.Item>
					<Menu.Item>Blog</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</>
	)
}

export default App
