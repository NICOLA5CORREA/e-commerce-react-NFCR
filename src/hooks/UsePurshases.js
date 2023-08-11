import axios from "axios"
import { useState } from "react"
import { getCardThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import getConfigToken from "../utils/getConfigToken"

const UsePurshases = () => {
    
        const [purshases, setPurshases] = useState()
        const dispatch = useDispatch()
    
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    //POST

    const makePurshase = () => {
        axios.post(url,'', getConfigToken(),)
        .then(res => {
            console.log(res.data)
            dispatch(getCardThunk())
        })
        .catch(err => console.log(err))
    }

    //GET
    const getAllPurshases = () => {
        axios.get(url, getConfigToken())
        .then(res => setPurshases(res.data))
        .catch(err => console.log(err))
    }


    return { makePurshase, getAllPurshases, purshases }
}

export default UsePurshases
