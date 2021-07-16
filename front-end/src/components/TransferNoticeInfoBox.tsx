// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../ui-components/Button';
import { Form } from '../ui-components/Form';
import InfoBox from '../ui-components/InfoBox';
import Modal from '../ui-components/Modal';

const TransferNoticeInfoBox = () => {
	const [showModal, setShowModal] = useState(false);

	const dismissModal = () => {
		setShowModal(false);
	};

	const showNotice = (event: any) => {
		event.preventDefault();
		setShowModal(true);
	};

	return (
		<>
			{showModal ?
				<Modal
					buttons={
						<Form.Group>
							<Button
								content='Close'
								icon='close'
								secondary
								onClick={dismissModal}
							/>
						</Form.Group>
					}
					centered
					dimmer='inverted'
					open
					onClose={dismissModal}
					size='tiny'
					title={'Polkassembly Transfer Notice'}
				>
					<p>Polkassembly is to be acquired by Premiurly OÜ on July 20th, 2021 and as of that date the Polkassembly database will be migrated from Parity Technologies to Premiurly OÜ. Premiurly OÜ is an independent organization that received a Web3 Foundation grant to improve and maintain Polkassembly.</p>
					<p>As part of this change your details will be shared with Premiurly OÜ.</p>
					<p>If you would like information on how Premiurly OÜ will process your personal data, you can find this in their <b>Privacy and Personal Data Policy</b> <a href='https://premiurly.in/policy/privacy-policy/'>here</a>. If you do not consent to the transfer of your personal data as part of this migration, you have until August 30th, 2021 to delete your Polkassembly account by going to <Link to={'/settings#deleteAccount'}>settings</Link> and pressing Delete My Account button, thereby ensuring that your data will not be transferred.</p>
					<p>Why is this change taking place?</p>
					<p>As Parity Technologies is a software engineering company, maintaining a forum is not part of its core business. Additionally, in the interest of decentralization, and given that Parity Technologies developed the initial implementation of Polkadot and Kusama, the community will be better served with an independent entity stewarding this vital resource. Premiurly OÜ received a Web3 Foundation grant specifically for this purpose, including the deployment of Polkassembly to their own infrastructure.</p>
					<p>For details on your data protection rights see the Polkassembly Privacy Notice. Should you have any queries, please contact <a href='mailto:polkassembly@parity.io'>polkassembly@parity.io</a>.</p>
				</Modal>
				: null
			}
			<InfoBox
				className='transfer-notice-infobox'
				dismissable={true}
				name='transferNotice'
				title='Polkassembly is moving!'
			>
				<p>Polkassembly is to be acquired by Premiurly OÜ. <a href='#' onClick={showNotice}>Click Here</a> to read the full notice.</p>
			</InfoBox>
		</>
	);
};

export default TransferNoticeInfoBox;
