import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { BulletText } from '../../styles/paragraph';
import { Bullet } from '../../styles/fontawesome';
import { Grid } from './Flex-Grid';

export default function Bullets(props) {
	const {
		bullets,
	} = props;

	return (
		<Grid>
			{bullets.map(text => (
				<div>
					<Bullet icon={faCheck} />
					<BulletText>
						{ text }
					</BulletText>
				</div>
			))}
		</Grid>
	);
}
