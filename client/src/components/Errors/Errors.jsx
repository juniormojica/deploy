import { useDispatch, useSelector } from "react-redux"
import s from "./Errors.module.css"

import error from "../../assets/perroError.png"

const Errors = () => {
    const errors = useSelector((state) => state.errors)
    errors && console.log(errors);
    return (
        <div className={s.errorsContainer}>
            <h1>Ocurrió Un ERROR :</h1>
            <h3>{errors && errors}</h3>
            <figure>
                <img src={error} alt="" />
            </figure>

        </div>
    )

}

export default Errors