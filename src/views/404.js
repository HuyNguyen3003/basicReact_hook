import { useHistory } from "react-router-dom";



const Notfound = () => {
    let hitory = useHistory();
    const handSummit = () => {
        hitory.push('/')
    }

    return (
        <div>
            <h1>not page</h1>
            <button onClick={handSummit}>goto home</button>
        </div>

    )
}
export default Notfound;