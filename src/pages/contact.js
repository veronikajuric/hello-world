import React, {
	ChangeEvent, FormEvent, useState,
} from 'react';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
	SectionWrapper, FormWrapper,
} from '../styles/wrappers';
import { Flex } from '../components/Atoms/Flex-Grid';
import { Paragraph } from '../styles/paragraph';
import { Title } from '../styles/headings';
import { HorizontalDevider, Space, B } from '../styles/helpers';
import {
	InputField, TextField, FormText, ErrorEmpty,
} from '../components/forms';
import { Button } from '../components/Atoms/Button';
import { FormIcon } from '../styles/fontawesome';

export default function Contact() {
	// const [color, setColor] = useState();
	// const [message, setMessage] = useState('');
	//
	// const onClickHandler = e => {
	// 	setColor();
	// };
	//
	//
//
// export interface ISentDate {
// 	name: string;
// }
//
// export interface ISentResult {
// 	success =  boolean;
// 	message =  string;
//
// }
//
// interface IProps {
// 	onSent =  (data: ISentData) => ISentResult;
// }

	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');

	const handleNameChange = event => {
		const target = event.target;
		const name = target.name;
		let error = '';
		setName(e.currentTarget.value);
		// validateName(e.currentTarget.value);
		if (!target.value) {
			error = `${name} field cannot be empty`;
		}
	};
	//
	// const validateName = (value: string) : string => {
	// 	const error = value ? '' : 'You must enter your first name';
	// 	setNameError(error);
	//
	// 	return error;
	// };

	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const nameValidationError = validateName(name);
	// 	if (nameValidationError === "") {
	// 		const result = props.onSent({
	// 			name
	// 		});
	// 		// TODO - set state to indicate form is submitted
	// 		// TODO - set state to flag whether the form submission was successful with any errors
	// 	}
	// };

	return (
		<>
			<SectionWrapper
				direction="column"
				align="center"
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
							value={name}
							onChange={handleNameChange}

						/>
						<ErrorEmpty>
							{}
						</ErrorEmpty>

						<InputField
							placeholder="Email Address"
							type="email"
							pattern="+@globex.com"
							size="30"
							required
						/>
						<ErrorEmpty>
							Required field
						</ErrorEmpty>
						<InputField
							placeholder="Subject"
							type="text"
							required
						/>
						<ErrorEmpty>
							Required field
						</ErrorEmpty>
						<TextField
							placeholder="Your Message"
							required
						/>
						<ErrorEmpty>
							Required field
						</ErrorEmpty>
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
