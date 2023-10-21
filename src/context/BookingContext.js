import { createContext, useEffect, useState } from "react";
import { seatData } from "../Seat";

export const MovieContext = createContext(null);


export const MovieContextProvider = (props) => {

    const [checkedList, setCheckedList] = useState([]);
    const [movieData,setMovieData] = useState({})


    const handleSelect = (event) => {
        // console.log(event.target.value)
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            //Add checked item into checkList
            setCheckedList([...checkedList, value ]);

        } else {
            //Remove unchecked item from checkList
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
    };


    const totalAmount = () => {
        let totalAmount = 0
        for (let item of checkedList) {
            for (let data of seatData) {
                if (Object.values(data).includes(item)) {
                    totalAmount += Number(data['price'])
                }
            }
        }
        return totalAmount;
    };



    const contextValue = {
        checkedList,
        handleSelect,
        totalAmount,
        movieData,
        setMovieData
    };

    return <MovieContext.Provider value={contextValue}>
        {props.children}</MovieContext.Provider>

}