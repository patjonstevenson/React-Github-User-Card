import axios from "axios";

const fetchUser = url => {
    axios
        .get(url)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log("Oops! Something went wrong.\n", err));
    return;
}


export default fetchUser;