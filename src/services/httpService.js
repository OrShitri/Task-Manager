import axios from "axios";

class HttpService {

    apiurl = process.env.REACT_APP_API;

    get() {
        return axios.get(this.apiurl);
    }

    post(newTask) {
        return axios.post(this.apiurl, newTask);
    }

    put(updatedTask) {
        return axios.put(this.apiurl + updatedTask.id, updatedTask);
    }

    delete(id) {
        return axios.delete(this.apiurl + id);
    }
}

export default HttpService;