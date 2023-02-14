import { createContext } from 'react';

const UserContext = createContext({
	name: 'Abhishek',
	email: 'abhishek@gmail.com'
});

UserContext.displayName = 'UserContext';

export default UserContext;
