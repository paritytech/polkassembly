import React, { useState, useEffect } from 'react'
import { Icon, Label, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react'
import styled from 'styled-components';

interface Props {
    className?: string
    color: SemanticCOLORS
    disapearAfter?: number
    iconName: SemanticICONS
    labelText: string
}

const DisapearingLabel = ({ className, color, disapearAfter = 2000 ,iconName, labelText }:Props) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsVisible(false), disapearAfter)
	})
	return (isVisible
		? <Label className={className} color={color} size={'large'}>
			<Icon name={iconName} size={'large'} />
			<Label.Detail>{labelText}</Label.Detail>
		</Label>
		: null)
}

export default styled(DisapearingLabel)`
    &.ui.label > .detail {
        margin-left: 0;
        vertical-align: middle;
    }
`