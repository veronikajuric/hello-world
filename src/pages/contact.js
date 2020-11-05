import React, { useState } from 'react';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
	Flex, SectionWrapper, FormWrapper,
} from '../components/wrappers';
import { Paragraph } from '../components/paragraph';
import { Title } from '../components/headings';
import { HorizontalDevider, Space, B } from '../components/helpers';
import { InputField, TextField, FormText } from '../components/forms';
import { Button } from '../components/Atoms/Button';
import { FormIcon } from '../components/fontawesome';

export default function Contact() {
	// const [color, setColor] = useState();
	// const [message, setMessage] = useState('');
	//
	// const onClickHandler = e => {
	// 	setColor();
	// };
	//
	//

	return (
		<>
			<SectionWrapper
				direction="column"
				align="cente r"
			>
				<Title>
					Contact us
				</Title>
				<Paragraph
					type="section"
				>
					Whatever your business goals are, we take your success seriously because your success is our success.
					We’d love to connect and discuss how we can help your business thrive! Don’t hesitate to reach out.
				</Paragraph>
				<Space />

				<Flex
					direction="row"
					justify="center"
				>
					{/* <img width="40%" height="300px" src="https://fatcatcoders-dev.websupercell.com/static/phone-0dffd3abe1dd72b8303551fe8eb94fb6.png" /> */}
					<FormWrapper
						direction="column"
						onSubmit={() => {
							console.log('i am clicked');
						}}
					>
						<InputField
							placeholder="Full Name"
							required
							type="text"

						/>
						<InputField
							placeholder="Email Address"
							type="email"
							pattern="+@globex.com"
							size="30"
							required
						/>
						<InputField
							placeholder="Subject"
							type="text"
							required
						/>
						<TextField
							placeholder="Your Message"
							required
						/>
						<Space small />
						<Button
							color="green"
							size="smallest"
							type="submit"
						>
							Send Message
						</Button>
						<HorizontalDevider size="thin" />
						<FormText>
							<B>Contact information</B>
						</FormText>
						<Flex
							direction="row"
							align="center"
							justify="flex-start"
						>
							<FormIcon icon={faMapMarkerAlt} />
							<FormText
								as="a"
								opacity="50%"
								cursor="pointer"
							>
								Njegoševa 45, 11 000 Belgrade, Serbia
							</FormText>
						</Flex>
						<Flex
							direction="row"
							align="center"
							justify="flex-start"
						>
							<FormIcon icon={faEnvelope} />
							<FormText
								as="a"
								opacity="50%"
								cursor="pointer"
							>
								hello@fatcatcoders.com
							</FormText>
						</Flex>
					</FormWrapper>
				</Flex>
			</SectionWrapper>
		</>
	);
}
