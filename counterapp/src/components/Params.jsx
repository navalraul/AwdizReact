import { useNavigate } from "react-router-dom";

function Params () {

    const router = useNavigate();

    function goto() {
        router('/single-product/841')
    }
    return (
        <div>
            <button onClick={goto}>Click to redirect</button>
        </div>
    )
}

export default Params;