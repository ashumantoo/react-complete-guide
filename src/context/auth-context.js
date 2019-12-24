import React from 'react';

/**=====================================================================================
 *                               CONTEXT API
 *                            ----------------
 * 1. React Context api provides a way to pass data through the Component tree without
 *    having to pass props down manually to every components.
 * 2. We can create context using the React.createContext() method which accept some
 *    default object or array of any data type
 * 3. All the other component who use this context needs to be wrapped around this context
 *    class like AuthContext
 * 4. The Component from which we want to send the data need to implements <AuthContext.Provider>
 * 5. The component which accept the data need to implement <AuthContext.Consumer>
 *                                 Where AuthContext is a function based components
 */

const AuthContext = () => React.createContext({
    authenticated: false,
    login: () => { }
})

export default AuthContext;