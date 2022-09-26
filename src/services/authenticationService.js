
let url = "http://localhost:8080";

class authenticationService {
  async login(email, password) {
        const response = await fetch(url + "/v1/auth", {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        });
        return await response.json();        
    }
}

export default new authenticationService();
