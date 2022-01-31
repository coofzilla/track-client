import axios from "axios";

export default axios.create({
  //change baseURL based on ngrok session
  baseURL: "http://e556-61-74-229-93.ngrok.io/",
});
