import { useEffect } from 'react';
import useRouter from './useRouter';

export default function (motionId?: number | null) {

	const { history } = useRouter();

	useEffect(( ) => {
		if (motionId) {
			history.push(`/motion/${motionId}`);
		}
	});
}
