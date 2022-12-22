import * as React from 'react';
import { Menu, Transition } from '@headlessui/react';

interface IDropdownProps {
	children?: React.ReactNode;
	displayButton: React.ReactNode;
}

const Dropdown: React.FunctionComponent<IDropdownProps> = props => {
	const { displayButton } = props;
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button>{displayButton}</Menu.Button>
			</div>

			<Transition
				as={React.Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">{props.children}</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default Dropdown;
