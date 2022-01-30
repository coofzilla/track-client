import axios from "axios";

export default axios.create({
  //change baseURL based on ngrok session
  baseURL: "https://504b-61-74-229-93.ngrok.io",
});
