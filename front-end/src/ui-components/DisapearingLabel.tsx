import React, { useState, useEffect } from 'react';
import { Icon, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props {
    className?: string
    iconColor: SemanticCOLORS
    disapearAfter?: number
    iconName: SemanticICONS
    text: string
}

const DisapearingLabel = ({ className, iconColor, disapearAfter = 2000 ,iconName, text }:Props) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsVisible(false), disapearAfter);
	});
	return (isVisible
		? <div className={className} >
			<Icon color={iconColor} name={iconName} size={'large'} />{text}
		</div>
		: null);
};

export default styled(DisapearingLabel)`
	display: inline-block;

    &.ui.label > .detail {
        margin-left: 0;
        vertical-align: middle;
    }
`;