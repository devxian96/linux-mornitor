import axios from "axios";

// dotenv HOST is BackEnd URL
axios.defaults.baseURL = `http://${process.env.REACT_APP_API_URL}/api`;

export default axios;
