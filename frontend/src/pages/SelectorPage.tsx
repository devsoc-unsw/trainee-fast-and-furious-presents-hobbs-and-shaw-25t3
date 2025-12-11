import { Selector } from "../components/Selector/Selector";
import { Button } from "../components/Button/Button";
import type { SelectorPageProps } from "../utils/types";
// import { useNavigate } from "react-router-dom";

const SelectorPage = (props: SelectorPageProps) => {
    // const navigate = useNavigate();
    console.log("props")
    return (
        <>
            <div className="page">
                <h2>{props.question}</h2>
                <Selector emojis={props.emojis} />
                {props.prevPage}
                <div id="navButtons">
                    <button onClick={() => {}}>Back</button>
                    <Button text='Let Us Decide!' onClick={() => {}} />
                </div>
            </div>
        </>
    )
}

export { SelectorPage };