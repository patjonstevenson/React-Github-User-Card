import axios from "axios";

const fetchUser = url => {
    console.log("Inside fetchUser");
    axios
        .get(url)
        .then(res => {
            console.log("Fetch user response: ", res);
            return res.data;
        })
        .catch(err => {
            console.log("Oops! Something went wrong in fetchUser.\n", err);
            return {};
        });

}


export default fetchUser;