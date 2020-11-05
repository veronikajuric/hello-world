import React from 'react';
import { Link } from 'gatsby';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper, Flex } from './wrappers';
import { DropdownItem, NavigationLinkTitle } from './paragraph';
import { Button } from './Atoms/Button';
import { Arrow } from './fontawesome';
import { ArrowUp, B } from './helpers';

export default function Header() {
	return (
		<>
			<HeaderWrapper>
				<Link to="/"><img width="300px" height="80px" src="https://fatcatcoders-dev.websupercell.com/static/fatcat-coders-logo-3fd25e8f16f1e62998a26ee55efa368b.svg" /></Link>
				<Flex align="center" justify="space-between">
					<NavigationLinkTitle>
						<Link to="/application-development/">Development</Link>
						<div>
							<Link to="/application-development/">
								<div>
									<DropdownItem>
										<B>Application Development</B>
									</DropdownItem>
								</div>
							</Link>
							<div>
								<DropdownItem>
									UX & Interface Design
								</DropdownItem>
							</div>
							<div>
								<DropdownItem>
									JavaScript Development
								</DropdownItem>
							</div>
							<div>
								<DropdownItem>
									<B>Skill Showcase</B>
								</DropdownItem>
							</div>
						</div>
					</NavigationLinkTitle>
					{' '}
					<Arrow icon={faSortDown} />
					<NavigationLinkTitle>
						IT Recruitment
						<div>
							<div>
								<DropdownItem>
									<B>Talent Acquisition</B>
								</DropdownItem>
							</div>
							<div>
								<DropdownItem>
									<B>Quick Hire</B>
								</DropdownItem>
							</div>
							<div>
								<DropdownItem>
									<B>Jobs</B>
								</DropdownItem>
							</div>
						</div>
					</NavigationLinkTitle>
					<Arrow icon={faSortDown} />
					<NavigationLinkTitle>
						Company
						<div>

							<div>
								<DropdownItem>
									<B>About Us</B>
								</DropdownItem>
							</div>
							<div>
								<DropdownItem>
									<B>Careers</B>
								</DropdownItem>
							</div>

							<div>
								<DropdownItem>
									<B>Blog</B>
								</DropdownItem>
							</div>

						</div>
					</NavigationLinkTitle>
					<Arrow icon={faSortDown} />
					<Link to="/contact/">
						<Button
							color="green"
							size="small"
						>
							Contact Us
						</Button>
					</Link>
				</Flex>
			</HeaderWrapper>
		</>
	);
}
