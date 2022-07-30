import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {

    const [data, setdata] = useState([])
    const [Loadding, setLoadding] = useState(true)

    useEffect(() => {
        async function fetchdata() {
            let res = await axios.get(url)
            let data = (res && res.data) ? res.data : [];
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YY')
                    return item;
                })
                data = data.reverse()
            }
            setdata(data)
            setLoadding(false)
        }
        fetchdata();

    }, [])

    return {
        data, Loadding
    }


}

export default useFetch;