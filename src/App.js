import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { AdminLayout } from './components/admin/layout';
import { Layout } from './components/layout';
import { PrivateRoute } from './components/privateRoute';
import { getLocalStorage } from './services/localStorage';
import { fetchMeProfile } from './store/ducks/auth/actionCreators';

import Dashboard from './pages/admin/Dashboard';
import Home from './pages/Home';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('shop');
		if(token) {
			dispatch(fetchMeProfile());
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={ <Home />} />
					<Route path='test' element={ <div>TEst</div>} />
				</Route>

				<Route path="/admin" element={<AdminLayout/>}>
					<Route index element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					} />
					<Route path='/admin/test' element={
						<PrivateRoute>
							<div>Test</div>	
						</PrivateRoute>
					} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
