import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { BulletText } from '../../styles/paragraph';
import { Bullet } from '../../styles/fontawesome';

export default function Bullets(props) {
	const {
		text,
	} = props;

	return (
		<div>
			<Bullet icon={faCheck} />
			<BulletText>
				{ text }
			</BulletText>
		</div>

	);
}
