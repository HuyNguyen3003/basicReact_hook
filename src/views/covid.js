import useFetch from "../customize/fetch";


const Covid = () => {

    const { data: Coviddata, Loadding: isLoadding }
        = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')


    return (
        <>
            < div >
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

                        {isLoadding === false && Coviddata && Coviddata.length > 0 &&
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
                            })}

                        {isLoadding === true &&
                            <tr> <td colSpan={5} style={{ 'textAlign': 'center' }}>Loadding</td></tr>
                        }

                    </tbody>
                </table>
            </div >
        </>
    )

}


export default Covid;