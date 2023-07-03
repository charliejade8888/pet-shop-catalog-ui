export const logout = () => {
    console.log("trying to log out")
    console.log(sessionStorage.getItem("bearer-token"))
    sessionStorage.removeItem('bearer-token')
}

export const isUserLoggedIn = () => {
    let token = sessionStorage.getItem('bearer-token')
    if (token === null) return false;
    return true;
}

// useContext is useful for multiple deeply nested components to avoid 'prop drilling'
// https://www.w3schools.com/react/react_usecontext.asp