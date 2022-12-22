import * as React from 'react';
import { APP_NAME } from '@/utils';
import Logo from '../Logo';

interface IAuthSideProps {
	children?: React.ReactNode;
	content?: React.ReactNode;
}

const AuthSide: React.FunctionComponent<IAuthSideProps> = props => {
	const { children, content } = props;

	return (
		<div className="grid lg:grid-cols-3 h-full">
			<div
				className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex"
				style={{ backgroundImage: `url('/img/others/auth-side-bg.jpg')` }}
			>
				<Logo mode="dark" />
				<div>
					<div className="mb-6 flex items-center gap-4">
						<img
							src="/img/avatars/thumb-10.jpg"
							alt="user"
							className="avatar"
						/>

						<div className="text-white">
							<div className="font-semibold text-base">
								Luis
							</div>
							<span className="opacity-80">
								El mass chingon
							</span>
						</div>
					</div>
					<p className="text-lg text-white opacity-80">
						Elstar comes with a complete set of UI components
						crafted with Tailwind CSS, it fulfilled most of the
						use case to create modern and beautiful UI and
						application
					</p>
				</div>
				<span className="text-white">
					Copyright &copy; {`${new Date().getFullYear()}`}{' '}
					<span className="font-semibold">{`${APP_NAME}`}</span>{' '}
				</span>
			</div>
			<div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
				<div className="xl:min-w-[450px] px-8">
					<div className="mb-8">{content}</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default AuthSide;
