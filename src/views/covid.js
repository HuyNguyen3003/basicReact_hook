import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
    const [Coviddata, setCoviddata] = useState([])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
            data.map(item => {
                item.Date = moment(item.Date).format('DD/MM/YY')
            })
        }
        setCoviddata(data)
    }, [])


    return (
        < div >
            {console.log('check data', Coviddata)}
            <table id="customers">
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Confirmed</td>
                        <td>Active</td>
                        <td>Deaths</td>
                        <td>Recovered</td>

                    </tr>
                </thead>
                <tbody>
                    {Coviddata && Coviddata.length > 0 &&
                        Coviddata.map(item => {
                            return (

                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
        </div >
    )

}


export default Covid;