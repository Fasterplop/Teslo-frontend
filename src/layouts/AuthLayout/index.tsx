import { Alert, Checkbox, Drawer, Dropdown, DropdownItem, Switch, Tooltip } from '@/components/ui';
import * as React from 'react';
import AuthSide from './AuthSide';
import SignInForm from './SignInForm';

interface IAuthLayoutProps {}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = props => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isChecked, setIsChecked] = React.useState(false);
	const [enabled, setEnabled] = React.useState(false);
	return (
		<div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
			<AuthSide>
				<div className="mb-8">
					<h3 className="mb-1">Welcome back!</h3>
					<p>Please enter your credentials to sign in!</p>
				</div>
				{/* 			<div>
					<Alert type="info" title={'Oops!'}>
						Ha ocurrido un error en el servidor
					</Alert>

					<Alert type="danger" className="mt-2" title={'Oops!'}>
						Ha ocurrido un error en el servidor
					</Alert>

					<Alert type="success" className="mt-2" title={'Oops!'}>
						Ha ocurrido un error en el servidor
					</Alert>

					<Alert type="warning" className="mt-2" title={'Oops!'}>
						Ha ocurrido un error en el servidor
					</Alert>
				</div> */}
				{/* 	BOTONES			<div>
					<h5 className="mb-4 text-center">Default Buttons</h5>

					<button className="btn btn-primary">Default</button>
					<button className="btn btn-alternative">Alternative</button>
					<button className="btn btn-dark">Dark</button>
					<button className="btn btn-light">Light</button>

					<button className="btn btn-success">Success</button>
					<button className="btn btn-danger">Danger</button>
					<button className="btn btn-warning">Warning</button>

					<hr className="my-4" />

					<h5 className="mb-4 text-center">Pill Buttons</h5>

					<button className="btn btn-pill btn-primary">
						Default
					</button>
					<button className="btn btn-pill btn-alternative">
						Alternative
					</button>
					<button className="btn btn-pill btn-dark">Dark</button>
					<button className="btn btn-pill btn-light">Light</button>

					<button className="btn btn-pill btn-success">
						Success
					</button>
					<button className="btn btn-pill btn-danger">Danger</button>
					<button className="btn btn-pill btn-warning">
						Warning
					</button>

					<hr className="my-4" />

					<h5 className="mb-4 text-center">Disabled Buttons</h5>

					<button disabled className="btn btn-primary">
						Default
					</button>
					<button disabled className="btn btn-alternative">
						Alternative
					</button>
					<button disabled className="btn btn-dark">
						Dark
					</button>
					<button disabled className="btn btn-light">
						Light
					</button>

					<button disabled className="btn btn-success">
						Success
					</button>
					<button disabled className="btn btn-danger">
						Danger
					</button>
					<button disabled className="btn btn-warning">
						Warning
					</button>

					<hr className="my-4" />

					<h5 className="mb-4 text-center">Sizes</h5>
					<button className="btn btn-xs btn-primary">XS</button>
					<button className="btn btn-sm btn-primary">SM</button>
					<button className="btn btn-md btn-primary">MD</button>
					<button className="btn btn-lg btn-primary">LG</button>
					<button className="btn btn-xl btn-primary">XL</button>
				</div> */}
				{/* TYPOGRAPHY		<div>
					<h1 className="text-center mb-4">Typography</h1>
					<h1>h1</h1>
					<h2>h2</h2>
					<h3>h3</h3>
					<h4>h4</h4>
					<h5>h5</h5>
					<h6>h6</h6>
				</div> */}
				{/* 				Drawer{' '}
				<div>
					<button
						className="btn btn-primary"
						onClick={() => setIsOpen(true)}
					>
						Open Drawer
					</button>
					<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
				</div> */}
				{/* 			<div>
					<Dropdown
						displayButton={
							<button className="btn btn-alternative btn-sm">
								Options
							</button>
						}
					>
						<DropdownItem>Account settings</DropdownItem>
						<DropdownItem>Support</DropdownItem>
						<DropdownItem>License</DropdownItem>
						<DropdownItem>Sign out</DropdownItem>
					</Dropdown>
				</div> */}
				{/* 				<div>
					<Tooltip message={'Hello World!'}>
						<button className="btn btn-primary">
							Hover me Please!
						</button>
					</Tooltip>
					<Tooltip message={'Whatssup you!'}>
						<button className="ml-3 btn btn-warning">
							Dont hover me, i'm scared!
						</button>
					</Tooltip>
				</div> */}

				<div>
					<h6 className="mb-6 text-center">DEFAULT INPUT</h6>
					<div className="form-group">
						<label htmlFor="floating_email">
							Email address
						</label>

						<input
							type="text"
							name="floating_email"
							id="floating_email"
							placeholder=" "
							required
						/>

						<p>Please fill this input</p>
					</div>

					<div className="form-group form-group-success">
						<label htmlFor="floating_email">
							Email address
						</label>

						<input
							type="text"
							name="floating_email"
							id="floating_email"
							placeholder=" "
							required
						/>

						<p>Alright! Username available!</p>
					</div>

					<div className="form-group form-group-error">
						<label htmlFor="floating_email">
							Email address
						</label>

						<input
							type="text"
							name="floating_email"
							id="floating_email"
							placeholder=" "
							required
						/>

						<p>Oops! Username already taken!</p>
					</div>

					<h6 className="mb-6 text-center">SIZES</h6>
					<hr className="mb-3" />

					<div className="form-group">
						<label htmlFor="floating_email">SM</label>

						<input
							type="text"
							name="floating_email"
							id="floating_email"
							placeholder=" "
							required
							className="form-control-sm"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="floating_email">Base</label>

						<input
							type="text"
							name="floating_email"
							id="floating_email"
							placeholder=" "
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="floating_email">Large</label>

						<input
							type="text"
							name="floating_email"
							id="floating_email"
							placeholder=" "
							required
							className="form-control-lg"
						/>
					</div>
				</div>

				<h6 className="mb-6 text-center">DISABLED</h6>
				<div className="form-group">
					<label htmlFor="floating_email">Email address</label>

					<input
						type="text"
						name="floating_email"
						id="floating_email"
						placeholder=" "
						required
						disabled
					/>
				</div>

				<div className="form-group">
					<textarea
						id="message"
						rows={4}
						placeholder="Leave a comment..."
					></textarea>
				</div>

				<div className="form-group">
					<select>
						<option>United States</option>
						<option>Canada</option>
						<option>France</option>
						<option>Germany</option>
					</select>
				</div>

				<div className="form-group">
					<select className="form-control-lg">
						<option>United States</option>
						<option>Canada</option>
						<option>France</option>
						<option>Germany</option>
					</select>
				</div>

				<div className="form-group">
					<select className="form-control-sm">
						<option>United States</option>
						<option>Canada</option>
						<option>France</option>
						<option>Germany</option>
					</select>
				</div>

				<div className="form-group">
					<Checkbox isChecked={isChecked} onChange={setIsChecked}>
						I agree to the{' '}
						<a
							href="#"
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							terms and condition
						</a>
						.
					</Checkbox>
				</div>

				<div className="form-group">
					<Switch isChecked={enabled} onChange={setEnabled} />
				</div>

				<SignInForm />
			</AuthSide>
		</div>
	);
};

export default AuthLayout;
