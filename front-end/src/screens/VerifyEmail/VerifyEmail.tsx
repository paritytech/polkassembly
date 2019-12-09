import React from 'react'
import { useRouter } from '../../hooks';

export default () => {
    const router = useRouter();

    // Get value from query string (?token=123) or route param (/:postId)
    return <div>{router.query.token}</div>;
}
