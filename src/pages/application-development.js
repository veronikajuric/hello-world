import React from 'react';
import { Link } from 'gatsby';
import {
	HeroImageWrapper,
	SectionWrapper,
} from '../styles/wrappers';
import { Title } from '../styles/headings';
import {
	Paragraph,
} from '../styles/paragraph';
import { B, Space } from '../styles/helpers';

import { Button } from '../components/Atoms/Button';
import { Grid, Flex } from '../components/Atoms/Flex-Grid';
import Bullets from '../components/Atoms/Bullets';
import Services from '../components/Molecules/Services';
import HeroSection from '../components/Molecules/HeroSection';

export default function ApplicationDevelopment() {
	return (
		<>
			<HeroSection
				title={(
					<>
						We solve
						<br />
						{' '}
						<B>business problems</B>
					</>
				)}
				description={(
					`We’re skilled engineers who understand the world of business very well.
					That’s why our focus is always on your business needs, not fancy tech or shiny buttons.`
				)}
				btnText="Get In Touch With Us"
				image={<img src="https://fatcatcoders-dev.websupercell.com/static/catsWorking-0ccb17777983b74fd63a5594a8c5401a.png" />}
			/>
			<SectionWrapper direction="column" gray>
				<Services
					title="Our strongest suits"
					description={(
						<>
							We thrive on complex projects and
							{' '}
							<B>love challenges</B>
							{' '}
							because we
							believe that every problem has a solution if you are creative enough.
						</>
					)}
					subtitle1="UX and Interface Design"
					subtitle2="JavaScript Development"
					image1={<img src="data:image/png;base64,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" />}
					image2={<img src="data:image/png;base64,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" />}
					text1="We specialize in user experience research and user interface design with the aim to make
					your application both beautiful and user-friendly."
					text2="Using JavaScript as our primary language, we can create your mobile, web, and desktop applications,
					as well as scalable back-end technologies and much more."
					btn1="View More"
					btn2="View More"
				/>
				<Paragraph type="section">
					We also have vast experience with:
				</Paragraph>
				<Space />
				<Flex align="center" direction="column">
					<Bullets
						bullets={[
							<>
								E-commerce in
								{' '}
								<B>Magento</B>
							</>,
							<>
								E-commerce in
								{' '}
								<B>SalesForce Commerce Cloud</B>
							</>,
							<>
								Cloud Back-End
								{' '}
								<B>API Development</B>
							</>,
							<>
								Website Development in
								{' '}
								<B>WordPress</B>
							</>,
						]}
					/>
				</Flex>
			</SectionWrapper>
			<SectionWrapper direction="column" align="center">
				<Title>
					We build applications the right away
				</Title>
				<Paragraph type="section">
					Best practices are paramount throughout our process.
					We build scalable applications using component-based architecture,
					because we want to make sure that your applications are simple to maintain,
					easy to extend, and that they function brilliantly.
				</Paragraph>
				<Space small />
				<Flex align="center" direction="column">
					<Bullets
						bullets={[
							<>
								We fully integrate with your team
							</>,
							<>
								We like to work in short, focused sprints
							</>,
							<>
								We communicate and collaborate daily
							</>,
							<>
								We conduct weekly demonstrations
							</>,
						]}
					/>
				</Flex>
				<Space />
				<HeroImageWrapper>
					<img src="https://fatcatcoders-dev.websupercell.com/static/appBuildingImage-5cac0e44e939bb0ac7d220b12e597cf8.png" />
				</HeroImageWrapper>
				<Space small />
				<Button color="purple">
					See Our Portfolio
				</Button>
			</SectionWrapper>
			<SectionWrapper gray />
		</>
	);
}
