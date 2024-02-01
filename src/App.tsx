import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

function App() {
	const [endpointId, setEndpointId] = useState('0');

	const handleButtonClick = (id: string) => {
		setEndpointId(id);

		// navigate(`${id}`);
	};

	return (
		<>
			<div id="sidebar">
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to={`/People/${endpointId}`}>
								People
							</NavLink>
						</li>
						<li>
							<NavLink to={`/Starships/${endpointId}`}>
								Starships
							</NavLink>
						</li>
						<li>
							<NavLink to={`/Planets/${endpointId}`}>
								Planets
							</NavLink>
						</li>
					</ul>
				</nav>
				<div>
					<button
						style={{
							backgroundColor:
								endpointId === '1' ? 'lightgrey' : undefined,
						}}
						onClick={() => handleButtonClick('1')}
					>
						1
					</button>
					<button
						style={{
							backgroundColor:
								endpointId === '2' ? 'lightgrey' : undefined,
						}}
						onClick={() => handleButtonClick('2')}
					>
						2
					</button>
					<button
						style={{
							backgroundColor:
								endpointId === '3' ? 'lightgrey' : undefined,
						}}
						onClick={() => handleButtonClick('3')}
					>
						3
					</button>
					<button
						style={{
							backgroundColor:
								endpointId === '4' ? 'lightgrey' : undefined,
						}}
						onClick={() => handleButtonClick('4')}
					>
						4
					</button>
				</div>
			</div>
			<div id="detail">
				<h1>ID: {endpointId}</h1>
				<Outlet />
			</div>
		</>
	);
}

export default App;
