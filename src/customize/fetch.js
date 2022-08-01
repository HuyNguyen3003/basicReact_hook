import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {

    const [data, setdata] = useState([])
    let [Loadding, setLoadding] = useState(true)


    useEffect(() => {
        const ourRequest = axios.CancelToken.source()
        async function fetchdata() {
            let res = await axios.get(url, {
                cancelToken: ourRequest.token
            })
            let data = (res && res.data) ? res.data : [];
            if (data && data.length > 0 && isCovidData === true) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YY')
                    return item;
                })
                data = data.reverse()
            }
            setdata(data)
            setLoadding(false)
        }
        setTimeout(() => {
            fetchdata();
        }, 3000);
        return () => {
            ourRequest.cancel('cancel req') // <-- 3rd step
        }

    }, [url])

    return {
        data, Loadding
    }


}

export default useFetch;