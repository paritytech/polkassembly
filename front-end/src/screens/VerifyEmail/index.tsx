import React, { useEffect } from 'react'

import { useVerifyEmailMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';

export default () => {
	const router = useRouter();
	const [verifyEmailMutation, { data, error }] = useVerifyEmailMutation({
		variables: {
			token: router.query.token
		}
	});

	useEffect(() => {
		verifyEmailMutation();
	},[])

	if (error) return <div>{error.message}</div>
	if (data && data.verifyEmail && data.verifyEmail.message ) return <div>{data.verifyEmail.message}</div>

	return <div>Loading...</div>
}
