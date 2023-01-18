import BASE_URL from "./settings.js";


function apiFacade() {
  
    const setToken = (token) => {
        localStorage.setItem("jwtToken", token);
    };
    const getToken = () => {
        return localStorage.getItem("jwtToken");
    };
    const loggedIn = () => {
        return getToken() != null;
    };
    const logout = (setLoggedIn) => {
        localStorage.removeItem("jwtToken");
        setLoggedIn(false);
        // setLoginMessage("Log in to use the API");
        console.log("vi kom igennem logout")

    };

    const isLoggedIn = () => {
        if (localStorage.getItem("jwtToken") !== null) {
            return true
        }
        else return false 
    }

    function handleHttpErrors(res) {
        if (!res.ok) {
            return Promise.reject({status: res.status, fullError: res.json()});
        }
        return res.json();
    }

    const handleErrors = (err, setErrorMessage) => {
        if (err.status) {
            err.fullError.then(e => {
                console.error(e.message)
                if (setErrorMessage) {
                    setErrorMessage(err.code + ": " + err.message)
                }
            })
        } else {
            console.log("Network Error")
            console.error(err)
        }
    }

    const login = (user, password, setLoggedIn, setErrorMessage, setUsername) => {
        const opts = makeOptions("POST", true, {
            username: user,
            password: password,
        });
        return fetch(BASE_URL + "/login", opts)
            .then(handleHttpErrors)
            .then((res) => {
                // document.querySelector("#welcomeUser").innerHTML = `Welcome, ${user}`;
                setToken(res.token)
                setUsername(user)
                // setErrorMessage("Logged in")
                // setLoginMessage("Welcome " + user + ". Logged in as: " + getUserRoles());
                setLoggedIn(true)
    
            }).catch(err => {
                if (err.status) {
                    err.fullError.then(e => setErrorMessage(err.status + ": " + " " + e.message))
                    err.fullError.then(e => alert(err.status + ": " + " " + e.message))
                } else {
                    
                    alert("Login failed - Network error")
                }
            });
    };

    const getUserRoles = () => {
        const token = getToken()
        if (token != null) {
            const payloadBase64 = getToken().split('.')[1]
            const decodedClaims = JSON.parse(window.atob(payloadBase64))
            const roles = decodedClaims.roles
            return roles
        } else return ""
    }

    const hasUserAccess = (neededRole, loggedIn) => {
        const roles = getUserRoles().split(',')
        return loggedIn && roles.includes(neededRole)
    }

    const createUser = (user, password, rPassword) => {
        const opts = makeOptions("POST", false, {
            userName: user,
            userPass: password,
        });
        return fetch(BASE_URL + "/user/signup", opts).then(handleHttpErrors);
    };


    const fetchData = async (endpoint, updateAction, method, body, setErrorMessage) => {
        const opts = makeOptions(method, true, body)
        try {
            const res = await fetch(BASE_URL + endpoint, opts)
            const data = await handleHttpErrors(res)
            return updateAction(data)
        } catch (err) {
            handleErrors(err, setErrorMessage)
        }
    }

    const makeOptions = (method, addToken, body) => {
        const opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
        };
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            // console.log("make options før stringify")
            // console.log(body)
            opts.body = JSON.stringify(body);
            // console.log(opts.body);
        }
        return opts;
    };

    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        hasUserAccess,
        createUser,
        fetchData,
        isLoggedIn

    };
}

const facade = apiFacade();
export default facade;