import { IS_THEMED, THEMED_SIDEBAR_CLASSNAMES } from '@/utils';
import classNames from 'classnames';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../Spinner';

interface ILoaderProps {
	loading?: boolean;
}

const Loader: React.FunctionComponent<ILoaderProps> = props => {
	const { loading } = props;
	if (!loading) return null;

	return (
		<div className={classNames('fixed h-screen w-full bg-white z-50')}>
			<div className="flex items-center justify-center w-full h-full">
				<Spinner
					size={40}
					className={classNames(
						!IS_THEMED && 'text-blue-600',
						IS_THEMED && THEMED_SIDEBAR_CLASSNAMES.loaderColor
					)}
				/>
			</div>
		</div>
	);
};

export default Loader;

export const PortalLoader: React.FunctionComponent = () =>
	ReactDOM.createPortal(<Loader loading={true} />, document.getElementById('portal-loader'));

export const showLoader = () => {
	document.getElementById('portal-loader').classList.remove('hidden');
};

export const hideLoader = () => {
	document.getElementById('portal-loader').classList.toggle('hidden');
};
