import { useState, useEffect } from 'react'

// function for getting our data from localstorage

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) {
        return initialValue()
    }
    return initialValue
}


// custom hook which sets the input value in the local storage

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]) 

    return [value, setValue]
}