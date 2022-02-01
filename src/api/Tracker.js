import axios from "axios";

export default axios.create({
  //change baseURL based on ngrok session
  baseURL: "http://localhost:3000/",
});
