import "./review.css";
import ReviewInput from "./ReviewInput";

function Review() {
    return (
        <>
            <div className="col-sm-7 mx-auto mt-5">
                <div className="col">
                    <h3 className="fs-4 mb-2">Add a Review</h3>
                    <div className="bg-white rounded shadow-sm  px-4 py-4">
                        <ReviewInput />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;

