import axios from "axios";

axios.defaults.baseURL = "http://starlord.hackerearth.com";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

class BeerApi {
  constructor() {
    this.path = "/beercraft";
  }

  async getBeersInfo() {
    try {
      const { data } = await axios.get(`${this.path}`, {
        headers: { Authorization: this.token }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const beerApi = () => {
  return new BeerApi();
};
