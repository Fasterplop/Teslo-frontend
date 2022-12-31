import * as React from 'react';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router';
import Loader from './components/ui/Loader';
import ModalProvider from './context/ModalProvider';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<AuthProvider>
					<ModalProvider>
						<AppRouter />
					</ModalProvider>
				</AuthProvider>
			</BrowserRouter>
			<Loader />
		</React.Fragment>
	);
};

export default App;
