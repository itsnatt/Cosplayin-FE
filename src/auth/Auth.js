import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Auth = (WrappedComponent) => {
	return (props) => {
		const router = useRouter();

		useEffect(() => {
			const token = localStorage.getItem('token');
			if (!token) {
				router.push('/login'); // Redirect to login if token is not present
			}
		}, []);

		return <WrappedComponent {...props} />;
	};
};

export default Auth;
