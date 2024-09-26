import { API_ENDPOINT_SUBMIT, API_HOST, API_PORT, API_URL } from "../constants";

export default class ApiService {
  async init() {
    const res = await fetch(`${API_URL}`, {
      method: "GET",
    });
    if (res.status != 200) {
      // show some error to the user
    }
  }

  async submit(data) {
    const res = await fetch(`${API_URL}${API_ENDPOINT_SUBMIT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      return await res.json();
    } else {
      // show some error to the user
    }
  }
}
