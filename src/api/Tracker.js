import axios from "axios";

export default axios.create({
  //change baseURL based on ngrok session
  baseURL: "http://74da-61-74-229-93.ngrok.io",
});
