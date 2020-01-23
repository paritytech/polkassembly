import { Progress } from 'semantic-ui-react';
import React from 'react';
import styled from '@xstyled/styled-components';

interface Props {
	className?: string,
	color?: string,
	passingClass?: string,
	percent?: string,
	threshold?: string
}

const VotingBar = ({ className, percent, threshold }: Props) => {
	const passing: boolean = Number(percent) !>= Number(threshold) ? true : false;
	const passingClass = passing ? 'passing' : 'notpassing';

	return (
		<div className={className}>
			<div className='votenumbers'>Yes: {percent}%</div>
			<div
				className='votenumbers'
				style={{ left: percent + '%', position: 'absolute' }}
			>
					No: {(100-Number(percent)).toString()}%
			</div>
			<Progress
				className={passingClass}
				percent={percent}
			>
			</Progress>
			<div
				id='threshold'
				style={{ left: threshold + '%', position: 'absolute' }}
			>
				<hr></hr>
				Threshold: {threshold}%
			</div>
		</div>
	);
};

export default styled(VotingBar).attrs(( { passingClass }:Props ) => ({
	className: passingClass
}))`

	width: 100%;
	margin: 1rem 0 2.4rem 0;

	hr {
		width: 0.1rem;
		height: 0.8rem;
		border: none;
		background-color: grey_secondary;
		margin: 0;
	}

	.votenumbers {
		display: inline-block;
		color: grey_primary;
		font-size: xs;
		margin-bottom: -1rem;
	}

	#threshold {
		display: inline-block;
		color: grey_secondary;
		font-size: xs;
		margin-top: -1rem;
	}

    .ui.progress {
		height: 0.8rem;
		margin: 0.2rem 0;
		background-color: grey_light;

        .bar {
			height: 0.8rem;
		}
	}
	
	.passing {
		.bar {
			background-color: green_primary;
		}
	}
`;