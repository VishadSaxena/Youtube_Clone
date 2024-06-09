import { COMMENT_DATA } from "../utils/constants";
import CommentsList from "./CommentList";

const CommentsContainer = () => {
    return (
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentsList comments={COMMENT_DATA} />
      </div>
    );
  };
  
  export default CommentsContainer;
