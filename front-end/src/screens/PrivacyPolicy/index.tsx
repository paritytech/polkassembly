import styled from '@xstyled/styled-components';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid } from 'semantic-ui-react';

import { privacyPolicyMd } from '../../assets/privacy-policy';
import MarkdownStyling from '../../ui-components/MarkdownStyle';

interface Props {
	className?: string
}

const PrivacyPolicy = ({ className }:Props): JSX.Element => {

	return (
		<Grid className={className}>
			<Grid.Column className='policy_box' mobile={16} tablet={12} computer={10} largeScreen={10} widescreen={4}>
				<MarkdownStyling>
					<ReactMarkdown source={privacyPolicyMd}/>
				</MarkdownStyling>
			</Grid.Column>
			<Grid.Column mobile={16} tablet={4} computer={2} largeScreen={2} widescreen={12}/>
		</Grid>
	);
};

export default styled(PrivacyPolicy)`
    .policy_box {
        background-color: white;
        padding: 3rem!important;
        border-width: 1px;
        border-style: solid;
        border-color: grey_light;
	}
`;