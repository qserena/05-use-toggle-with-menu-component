import React from 'react'

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle }) {
	const [on, setOn] = React.useState(false)

	React.useEffect(() => {
		onToggle()
	}, [on])

	function toggle() {
		setOn((prevOn) => !prevOn)
	}

	return (
		<ToggleContext.Provider value={{ on, toggle }}>
			{children}
		</ToggleContext.Provider>
	)
}

export { ToggleContext }
