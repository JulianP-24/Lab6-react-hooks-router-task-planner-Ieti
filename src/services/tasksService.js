let url = "http://localhost:8080";

class tasksServices {
  async getTasks() {
    const response = await fetch(url + "/v1/tasks", {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    return await response.data;
  }
}

export default new tasksServices();
