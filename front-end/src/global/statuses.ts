// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// Note that clear is a status made up for Polkassembly
// for proposal that got cleared from the queue after a
// clearPublicProposal such as https://polkascan.io/kusama/democracy/referendum/57
export const proposalStatus = {
	CLEARED: 'Cleared',
	PROPOSED: 'Proposed',
	TABLED: 'Tabled'
};

export const referendumStatus = {
	CANCELLED: 'Cancelled',
	EXECUTED: 'Executed',
	NOTPASSED: 'NotPassed',
	PASSED: 'Passed',
	STARTED: 'Started',
	VETOED: 'Vetoed'
};

export const motionStatus = {
	APPROVED: 'Approved',
	DISAPPROVED: 'Disapproved',
	EXECUTED: 'Executed',
	PROPOSED: 'Proposed',
	VOTED: 'Voted'
};

export const tipStatus = {
	CLOSED: 'TipClosed',
	CLOSING: 'TipClosing',
	OPENED: 'TipOpened',
	RETRACTED: 'TipRetracted'
};

export const tipStatusMap = {
	[tipStatus.OPENED]: 'Opened',
	[tipStatus.CLOSING]: 'Closing',
	[tipStatus.CLOSED]: 'Closed',
	[tipStatus.RETRACTED]: 'Retracted'
};
