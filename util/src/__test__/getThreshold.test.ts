// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { getFailingThreshold,getPassingThreshold } from '../getThresholds';
import { VoteThresholdEnum } from '../types';

const ZERO = new BN(0);
const ONE = new BN(1);

describe('getPassingThreshold', () => {
	it('returns 1 when there are no nays, for any voteThreshold', () => {
		// with 0 nay with conviction of 0 and 10 total issuance
		// any number of aye would mean it passes, getPassing Threshold answers 1
		const common = { nays: ZERO, naysWithoutConviction: ZERO, totalIssuance: new BN(10) };

		let res = getPassingThreshold({ ...common, threshold: VoteThresholdEnum.Supermajorityapproval });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.eq(ONE)).toBe(true);

		res = getPassingThreshold({ ...common, threshold: VoteThresholdEnum.Simplemajority });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.eq(ONE)).toBe(true);

		res = getPassingThreshold({ ...common, threshold: VoteThresholdEnum.Supermajorityrejection });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.eq(ONE)).toBe(true);
	});

	it('passes with correct values with Supermajorityapproval', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityapproval;

		// with 3 nays with conviction of 1
		// Looking for x (number of aye with conviction of 1): 3/srqt(3 + x) = x/sqrt(100) => 8.75 -> 9
		let nays = new BN(3);
		let naysWithoutConviction = new BN(3);
		let res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(9);

		// with 49 (half of the total issuance) nays with conviction of 1
		// Looking for x (number of aye with conviction of 1): 49/srqt(49 + x) = x/sqrt(100) => 49.3-> 50
		nays = new BN(49);
		naysWithoutConviction = new BN(49);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(50);
	});

	it('verifies the conviction is working as expected with Supermajorityapproval', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityapproval;

		// with 30 nays with x1 conviction
		// Looking for x (number of aye with conviction of 1): 30/srqt(30 + x) = x/sqrt(100) => 36.72 -> 37
		let naysWithoutConviction = new BN(30);
		let nays = new BN(30);
		let res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(37);

		// with 30 nays and x0.1 conviction
		// Looking for x (number of aye with conviction of 1): 3/srqt(30 + x) = x/sqrt(100) => 5.06-> 6
		naysWithoutConviction = new BN(30);
		nays = new BN(3);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(6);

		// with 30 nays with 2x conviction
		// Looking for x (number of aye with conviction of 1): 60/srqt(30 + x) = x/sqrt(100) => 62.41-> 63
		naysWithoutConviction = new BN(30);
		nays = new BN(60);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(63);
	});

	it('passes with correct values with Simplemajority', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Simplemajority;
		let nays = new BN(3);
		let naysWithoutConviction = new BN(3);

		// with 3 nays with conviction of 1
		let res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(3);

		// with 49 (almost half of the total issuance) nays with conviction of 1
		nays = new BN(49);
		naysWithoutConviction = new BN(49);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(49);
	});

	it('passes with correct values with Supermajorityrejection', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityrejection;

		// with 5 nays with conviction of 5
		// Looking for x (number of aye with conviction of 1): 5/sqrt(100) = x/srqt(5 + x) => 1.25 -> 1
		let nays = new BN(5);
		let naysWithoutConviction = new BN(5);
		let res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(1);

		// with 49 (half of the total issuance) nays with conviction of 1
		// Looking for x (number of aye with conviction of 1): 49/srqt(49 + x) = x/sqrt(100) => 48.3-> 49
		nays = new BN(49);
		naysWithoutConviction = new BN(49);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(48);
	});

	it('verifies the conviction is working as expected with Supermajorityrejection', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityrejection;

		// with 30 nays with x1 conviction
		// Looking for x (number of aye with conviction of 1): 30/srqt(100) = x/sqrt(30 + x) => 21.5 -> 21
		let naysWithoutConviction = new BN(30);
		let nays = new BN(30);
		let res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(21);

		// with 30 nays and x0.1 conviction
		// Looking for x (number of aye with conviction of 1): 3/srqt(100) = x/sqrt(30 + x) => 1.6 -> 1
		naysWithoutConviction = new BN(30);
		nays = new BN(3);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(1);

		// with 30 nays with 2x conviction
		// Looking for x (number of aye with conviction of 1): 60/srqt(100) = x/sqrt(30 + x) => 55.4 -> 55
		naysWithoutConviction = new BN(30);
		nays = new BN(60);
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.passingThreshold?.toNumber()).toEqual(55);
	});

	it('fails with any threshold if there are more nays than half of the total issuance', () => {
		const nays = new BN(51);
		const naysWithoutConviction = new BN(51);
		let threshold = VoteThresholdEnum.Supermajorityapproval;
		const totalIssuance = new BN(100);
		let res = getPassingThreshold({ nays, naysWithoutConviction, threshold , totalIssuance });

		expect(res.isValid).toBe(false);
		expect(res.passingThreshold).toBeUndefined();

		threshold = VoteThresholdEnum.Simplemajority;
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold , totalIssuance });

		expect(res.isValid).toBe(false);
		expect(res.passingThreshold).toBeUndefined();

		threshold = VoteThresholdEnum.Supermajorityrejection;
		res = getPassingThreshold({ nays, naysWithoutConviction, threshold , totalIssuance });

		expect(res.isValid).toBe(false);
		expect(res.passingThreshold).toBeUndefined();
	});
});

describe('getFailingThreshold', () => {

	it('returns 1 when there are no ayes, for any voteThreshold', () => {
		// with 0 aye with conviction of 0 and 10 total issuance
		// any number of aye would mean it passes, getPassing Threshold answers 1
		const common = { ayes: ZERO, ayesWithoutConviction: ZERO, totalIssuance: new BN(10) };

		let res = getFailingThreshold({ ...common, threshold: VoteThresholdEnum.Supermajorityapproval });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.eq(ONE)).toBe(true);

		res = getFailingThreshold({ ...common, threshold: VoteThresholdEnum.Simplemajority });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.eq(ONE)).toBe(true);

		res = getFailingThreshold({ ...common, threshold: VoteThresholdEnum.Supermajorityrejection });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.eq(ONE)).toBe(true);
	});

	it('passes with correct values with Supermajorityapproval', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityapproval;

		// with 3 ayes with conviction of 1
		// Looking for x (number of nay with conviction of 1): x/srqt(3 + x) = 3/sqrt(100) => 1.25 -> 1
		let ayes = new BN(5);
		let ayesWithoutConviction = new BN(5);
		let res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(1);

		// with 49 (half of the total issuance) ayes with conviction of 1
		// Looking for x (number of nay with conviction of 1): x/srqt(49 + x) = 49/sqrt(100) => 48.3-> 48
		ayes = new BN(49);
		ayesWithoutConviction = new BN(49);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(48);
	});

	it('verifies the conviction is working as expected with Supermajorityapproval', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityapproval;

		// with 30 ayes with x1 conviction
		// Looking for x (number of nay with conviction of 1): x/srqt(30 + x) = 30/sqrt(100) => 21.5 -> 21
		let ayesWithoutConviction = new BN(30);
		let ayes = new BN(30);
		let res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(21);

		// with 30 ayes and x0.1 conviction
		// Looking for x (number of nay with conviction of 1):  x/srqt(30 + x) = 3/sqrt(100) => 1.6-> 1
		ayesWithoutConviction = new BN(30);
		ayes = new BN(3);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(1);

		// with 30 ayes with 2x conviction
		// Looking for x (number of nay with conviction of 1):  x/srqt(30 + x) = 60/sqrt(100) => 55.4-> 55
		ayesWithoutConviction = new BN(30);
		ayes = new BN(60);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(55);
	});

	it('passes with correct values with Simplemajority', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Simplemajority;
		let ayes = new BN(3);
		let ayesWithoutConviction = new BN(3);

		// with 3 ayes with conviction of 1
		let res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(3);

		// with 49 (almost half of the total issuance) ayes with conviction of 1
		ayes = new BN(49);
		ayesWithoutConviction = new BN(49);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(49);
	});

	it('passes with correct values with Supermajorityrejection', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityrejection;

		// with 3 ayes with conviction of 3
		// Looking for x (number of nay with conviction of 1): x/sqrt(100) = 3/sqrt(3+x) => 8.75 -> 9
		let ayes = new BN(3);
		let ayesWithoutConviction = new BN(3);
		let res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(9);

		// with 49 (half of the total issuance) ayes with conviction of 1
		// Looking for x (number of nay with conviction of 1): x/sqrt(100) = 49/sqrt(49+x) => 49.3-> 50
		ayes = new BN(49);
		ayesWithoutConviction = new BN(49);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(50);
	});

	it('verifies the conviction is working as expected with Supermajorityrejection', () => {
		const totalIssuance = new BN(100);
		const threshold = VoteThresholdEnum.Supermajorityrejection;

		// with 30 ayes with x1 conviction
		// Looking for x (number of nay with conviction of 1): x/sqrt(100) = 30/sqrt(30+x) => 36.7 -> 37
		let ayesWithoutConviction = new BN(30);
		let ayes = new BN(30);
		let res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(37);

		// with 30 ayes and x0.1 conviction
		// Looking for x (number of nay with conviction of 1): x/sqrt(100) = 3/sqrt(30+x) => 5.06 -> 6
		ayesWithoutConviction = new BN(30);
		ayes = new BN(3);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(6);

		// with 30 ayes with 2x conviction
		// Looking for x (number of nay with conviction of 1): x/sqrt(100) = 60/sqrt(30+x) => 62.41 -> 63
		ayesWithoutConviction = new BN(30);
		ayes = new BN(60);
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold, totalIssuance });

		expect(res.isValid).toBe(true);
		expect(res.failingThreshold?.toNumber()).toEqual(63);
	});

	it('fails with any threshold if there are more ayes than half of the total issuance', () => {
		// it can't fail in such a case.

		const ayes = new BN(51);
		const ayesWithoutConviction = new BN(51);
		let threshold = VoteThresholdEnum.Supermajorityapproval;
		const totalIssuance = new BN(100);
		let res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold , totalIssuance });

		expect(res.isValid).toBe(false);
		expect(res.failingThreshold).toBeUndefined();

		threshold = VoteThresholdEnum.Simplemajority;
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold , totalIssuance });

		expect(res.isValid).toBe(false);
		expect(res.failingThreshold).toBeUndefined();

		threshold = VoteThresholdEnum.Supermajorityrejection;
		res = getFailingThreshold({ ayes, ayesWithoutConviction, threshold , totalIssuance });

		expect(res.isValid).toBe(false);
		expect(res.failingThreshold).toBeUndefined();
	});
});
