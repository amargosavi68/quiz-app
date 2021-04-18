import React from 'react';

const userContext = React.createContext({username:'', password:'', isLoggedIn: false});
const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export default { UserProvider, UserConsumer };