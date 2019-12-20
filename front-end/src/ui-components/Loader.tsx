import React from 'react'
import { Dimmer, Loader as SUILoader } from 'semantic-ui-react'
import styled from 'styled-components'

interface Props{
    className?: string
}
const Loader = ({ className }: Props) => {
	return (
		<Dimmer inverted active className={className}>
			<SUILoader inverted>Loading</SUILoader>
		</Dimmer>
	)
}

export default styled(Loader)`
    background-color: inherit!important;
    `