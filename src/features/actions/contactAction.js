import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { localURL } from "./accomodationsAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const submitContact = createAsyncThunk(
    "contact/us", async ({
        name,
        email,
        mobile,
        subject,
        message
    }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const { data } = await axios.post(`${localURL}/contacts`, {
                    name,
                    email,
                    mobile,
                    subject,
                    message
                },
                config,
            );
            console.log("Registered Contact US Form", data);
            toast.success("We will contact you soon")
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)