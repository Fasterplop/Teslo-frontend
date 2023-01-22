import { capitalize } from '@/utils';
import classNames from 'classnames';
import * as React from 'react';
import { StatusOrder } from '../config';

interface IBadgeStatusOrderProps {
	status: StatusOrder;
}

const BadgeStatusOrder: React.FunctionComponent<IBadgeStatusOrderProps> = props => {
	const { status } = props;
	return (
		<span
			className={classNames(
				'btn btn-xs cursor-default btn-pill px-4',
				status === 'cancelled' && 'btn-danger',
				status === 'completed' && 'btn-success',
				status === 'pending' && 'btn-warning'
			)}
		>
			{capitalize(status)}
		</span>
	);
};

export default BadgeStatusOrder;
