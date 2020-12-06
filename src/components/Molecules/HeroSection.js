import React from 'react';
import { HeroContentWrapper, HeroImageWrapper, SectionWrapper } from '../../styles/wrappers';
import { HeroTitle } from '../../styles/headings';
import { HorizontalDevider, Space } from '../../styles/helpers';
import { Paragraph } from '../../styles/paragraph';
import { Button } from '../Atoms/Button';

export default function HeroSection(props) {
	const {
		title,
		description,
		btnText,
		image,
	} = props;

	return (
		<SectionWrapper>
			<HeroContentWrapper>
				<HeroTitle>
					{ title }
				</HeroTitle>
				<HorizontalDevider />
				<Paragraph>
					{ description }
				</Paragraph>
				<Space small />
				<Button>
					{ btnText }
				</Button>
			</HeroContentWrapper>
			<HeroImageWrapper>
				{image}
			</HeroImageWrapper>
		</SectionWrapper>
	);
}
