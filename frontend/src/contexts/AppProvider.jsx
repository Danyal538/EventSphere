import React from "react";
import AppContext from "./AppContext";
import { useState } from "react";

export const AppProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [Date, setDate] = useState("");
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [ticketType, setTicketType] = useState("General");
    const [ticketPrice, setTicketPrice] = useState("");

    return (
        <AppContext.Provider value={{ title, setTitle, Date, setDate, startTime, setStartTime, endTime, setEndTime, location, setLocation, description, setDescription, ticketPrice, setTicketPrice, ticketType, setTicketType, image, setImage }}>
            {children}
        </AppContext.Provider>
    )
};
