const { useState, useEffect } = require("react")

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if(token) return
        fetch(`http://localhost:8000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email,token])
    return[token];
}

export default useToken;