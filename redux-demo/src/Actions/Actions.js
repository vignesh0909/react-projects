import axios from 'axios';

const increment = () => {
    return {
        type: "INCREMENT"
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
const login = (isAuthenticated) => {
    return {
        type: "LOGIN",
        isAuthenticated
    }
}
const loginValidate = (data) => {
    return dispatch => {
        axios.get('http://localhost:4000/users')
            .then((res) => {
                let value = res.data
                let result = value.find(val => (val.name === data.username) && (val.password === data.password))
                //console.log(result)
                if (result) {
                    dispatch(login(true))
                }
                else {
                    dispatch(login(false))
                }
            })
    }
}
export { increment, decrement, login, loginValidate }
