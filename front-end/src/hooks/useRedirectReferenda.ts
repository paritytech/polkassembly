import { useEffect } from 'react';
import useRouter from './useRouter';

export default function (refId?: number | null) {

	const { history } = useRouter();

	useEffect(( ) => {
		if (refId) {
			history.push(`/referendum/${refId}`);
		}
	});
}