import classNames from 'classnames';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../Spinner';

interface ILoaderProps {}

const Loader: React.FunctionComponent<ILoaderProps> = props => {
	const {} = props;
	return ReactDOM.createPortal(
		<div className={classNames('fixed h-screen w-full bg-white z-50')}>
			<div className="flex items-center justify-center w-full h-full">
				<Spinner size={40} className={'text-blue-600'} />
			</div>
		</div>,
		document.getElementById('portal-loader')
	);
};

export default Loader;

export const showLoader = () => {
	document.getElementById('portal-loader').classList.remove('hidden');
};

export const hideLoader = () => {
	document.getElementById('portal-loader').classList.toggle('hidden');
};
