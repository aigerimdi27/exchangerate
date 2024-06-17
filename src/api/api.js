import axios from "axios"

export const getAllCurrencies = async() => {
    const resp = await axios('https://v6.exchangerate-api.com/v6/44e5694216fd5fe0852b4d4c/latest/KGS')
    // console.log(resp.data)
    return resp.data
}