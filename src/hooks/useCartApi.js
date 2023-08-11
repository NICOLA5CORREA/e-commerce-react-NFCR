import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { deleteCartG, getCardThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const useCartApi = () => {

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    const dispatch = useDispatch()

    //POST
    const addToCard = (data) => {
        const url = `${baseUrl}/cart`
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getCardThunk())
        })
        .catch(err => console.log(err))
    }
    //DELETE
    const deleteProductInCart = (id) => {
        const url = `${baseUrl}/cart/${id}`
        axios.delete(url, getConfigToken())
        .then(res => {
            console.log(res.data)
            // dispatch(getCardThunk()) => en lugar de este dispatch, se usa la action para eliminar el producto del estado global
            dispatch (deleteCartG(id))

        })
        .catch(err => console.log(err))
    }

return { addToCard, deleteProductInCart }
}

export default useCartApi
