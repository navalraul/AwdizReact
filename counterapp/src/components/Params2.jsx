import { useNavigate } from "react-router-dom";

function Params2 () {


    const router = useNavigate();

    function goto() {
        router('/single-page/982')
    }
    return (
        <div>
            <button onClick={goto}>Click to redirect</button>
        </div>
    )
}

export default Params2;