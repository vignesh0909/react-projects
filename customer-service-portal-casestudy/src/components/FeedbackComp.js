import { useState } from "react";
import Rater from "./Rater";

function Feedback(props) {
    const feedbacks = props;
    const [rating, setRating] = useState("5");
    const [latestFeedback, setLatestFeedback] = useState("");
    console.log(feedbacks)
    var items = [];
    // props.forEach(function (fb) {
    //     items.push(
    //         <div key={fb.pdtCode}>
    //             <a href="#"><h4>{fb.user}</h4></a>
    //             <Rater value={fb.rating} maxlength="6" />&nbsp;&nbsp;
    //             <span style={{ "fontSize": "9px" }}>{fb.rating}/5</span><br />
    //             <div>{fb.body}</div>
    //             <h6 style={{ "fontStyle": "italic", "color": "lightgrey" }}>
    //                 -{fb.updatedAt.substr(0, 10)}
    //             </h6>
    //         </div>
    //     )
    // });
    return (<>
        <div>
            {items}
            <div className={"form-group"}>
                <textarea className={"form-control"} rows="5" cols="12" value={latestFeedback} name="username"></textarea>
            </div>
            <div>
                <Rater value={rating} maxlength="6" /><span style={{ "fontSize": "9px" }} />
                <span>{rating}/5</span>
            </div><br />
            <button class="btn btn-primary">Submit Feedback</button>
        </div>
    </>);
}

export default Feedback;
