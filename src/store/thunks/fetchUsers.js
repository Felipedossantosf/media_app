import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    // DEV ONLY, FOR TESTING
    await pause(1000);

    return response.data;
});

// DEV ONLY, FOR TESTING
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export {fetchUsers};