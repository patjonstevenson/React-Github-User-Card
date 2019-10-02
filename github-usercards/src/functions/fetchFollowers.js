import axios from "axios";
import fetchUser from "./fetchUser";

const fetchFollowers = url => {
    axios
        .get(url)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log("Oops! Something went wrong.\n", err));
    return;
}


export default fetchFollowers;