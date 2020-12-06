import React from 'react';
import { Subtitle, Title } from '../../styles/headings';
import { Paragraph } from '../../styles/paragraph';
import { Space } from '../../styles/helpers';
import { ImageWrapService, ServiceContentWrapper } from '../../styles/wrappers';
import { Button } from '../Atoms/Button';
import { Flex } from '../Atoms/Flex-Grid';

const Services = (props) => {
	const {
		title,
		description,
		subtitle1,
		subtitle2,
		text1,
		text2,
		image1,
		image2,
		btn1,
		btn2,
	} = props;

	return (
		<>
			<Title>
				{title}
			</Title>
			<Paragraph type="section">
				{description}
			</Paragraph>
			<Space small />
			<Flex
				justify="space-evenly"
			>
				<Flex>
					<ImageWrapService>
						{image1}
					</ImageWrapService>
					<ServiceContentWrapper>
						<Subtitle>
							{subtitle1}
						</Subtitle>
						<Paragraph size="small">
							{text1}
						</Paragraph>
						<Button color="green">
							{btn1}
						</Button>
					</ServiceContentWrapper>
				</Flex>
				<Flex>
					<ImageWrapService>
						{image2}
					</ImageWrapService>
					<ServiceContentWrapper>
						<Subtitle>
							{subtitle2}
						</Subtitle>
						<Paragraph size="small">
							{text2}
						</Paragraph>
						<Button color="green">
							{btn2}
						</Button>
					</ServiceContentWrapper>
				</Flex>
			</Flex>
		</>
	);
};

Services.defaultProps = {
	title: 'Ja sam defaultni title ako me ne unese',
};

export default Services;
