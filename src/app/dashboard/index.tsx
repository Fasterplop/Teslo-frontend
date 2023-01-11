import * as React from 'react';

interface IDashboardPageProps {}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = props => {
	return (
		<div>
			<div className="tile text-center">
				<h3>Bienvenido al Dashboard de Dario</h3>
			</div>
		</div>
	);
};

export default DashboardPage;
