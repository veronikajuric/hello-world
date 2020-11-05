import React from 'react';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

import {
	HeroContentWrapper,
	HeroImageWrapper,
	SectionWrapper,
	ServicesMainWrapper,
	ServiceContentWrapper,
	ImageWrapService, BulletsWrapper, BulletsContainer, Flex,
} from '../components/wrappers';
import { HeroTitle, Title, Subtitle } from '../components/headings';
import { Bullet } from '../components/fontawesome';
import {
	Paragraph, BulletText,
} from '../components/paragraph';
import { HorizontalDevider, B, Space } from '../components/helpers';
import { Button } from '../components/Atoms/Button';

export default function HeroSection() {
	return (
		<>
			<SectionWrapper>
				<HeroContentWrapper>
					<HeroTitle>
						We build amazing
						{' '}
						<B>apps</B>
						<br />
						{' '}
						and hire
						{' '}
						<B>great talent</B>
					</HeroTitle>
					<HorizontalDevider />
					<Paragraph>
						We have the
						{' '}
						<B>right people</B>
						, a
						{' '}
						<B>proven process</B>
						, and the
						{' '}
						<B>powerful tools</B>
						{' '}
						you
						need to build amazing web applications or find the right talent for
						your company.
					</Paragraph>
					<Space small />
					<Button>Let's Work Together</Button>
				</HeroContentWrapper>
				<HeroImageWrapper>
					<img
						src="https://fatcatcoders-dev.websupercell.com/static/catsChilling-801869febba3b61e562832fd0be50de0.png"
					/>
				</HeroImageWrapper>
			</SectionWrapper>
			<SectionWrapper direction="column" gray>
				<Title> Our services</Title>
				<Paragraph type="section">
					{' '}
					<B>FatCat Coders</B>
					{' '}
					is an
					{' '}
					<B>application development</B>
					{' '}
					and
					{' '}
					<B>talent acquisition company</B>
					{' '}
					consisted of highly motivated and
					skillful people who share a passion for technology,
					innovation and HR.
				</Paragraph>
				<ServicesMainWrapper justify="space-evenly">
					<Flex>
						<ImageWrapService>
							<img src="data:image/png;base64,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" />
						</ImageWrapService>
						<ServiceContentWrapper>
							<Subtitle>Application Development</Subtitle>
							<Paragraph size="small">
								High quality is always our top priority. We provide complete application development, from the idea stage to the fully-fledged creation.
							</Paragraph>
							<Link to="/application-development/"><Button color="green">View More</Button></Link>
						</ServiceContentWrapper>
					</Flex>
					<Flex>
						<ImageWrapService>
							<img src="data:image/png;base64,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" />
						</ImageWrapService>
						<ServiceContentWrapper>
							<Subtitle>Talent Acquisition</Subtitle>
							<Paragraph size="small">
								We are a technology company acquiring talent for our needs and we understand what has to be done to get the best talent possible.
							</Paragraph>
							<Button color="green">View More</Button>
						</ServiceContentWrapper>
					</Flex>
				</ServicesMainWrapper>
			</SectionWrapper>
			<SectionWrapper direction="column" align="center">
				<Title>
					OUR TEAM IS YOUR TEAM
				</Title>
				<Paragraph type="section">
					Whether you need a couple of experts to work on your project, or an entire team to own the production
					process, we're well equipped to handle the myriad challenges involved in creating modern application.
				</Paragraph>
				<BulletsWrapper>
					<BulletsContainer>
						<div>
							<Bullet icon={faCheck} />
							<BulletText>We fully integrate with your team</BulletText>
						</div>
						<div>
							<Bullet icon={faCheck} />
							<BulletText>We like to work in short, focused sprints</BulletText>
						</div>
						<div>
							<Bullet icon={faCheck} />
							<BulletText>We communicate and collaborate daily</BulletText>
						</div>
						<div>
							<Bullet icon={faCheck} />
							<BulletText>We conduct weekly demonstrations</BulletText>
						</div>
					</BulletsContainer>
				</BulletsWrapper>
				<HeroImageWrapper>
					<img src="https://fatcatcoders-dev.websupercell.com/static/catsChilling-801869febba3b61e562832fd0be50de0.png" />
				</HeroImageWrapper>
				<Space small/>
				<Button>This Is Who We Are</Button>
			</SectionWrapper>
			<SectionWrapper gray />
		</>
	);
}
