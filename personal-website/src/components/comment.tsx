import { IComment } from "@/database/blogSchema";
import parseTime from "@/helpers/parseTime";

// When we pass props, the name that we use to pass values is the key for the type
type CommentProps = {
  comment: IComment;
};

function Comment({ comment }: CommentProps) {
  return (
    <div className="blog-comment">
      <h4 className="comment-user">{comment.user}</h4>
      <p className="comment-text">{comment.comment}</p>
      <span className="comment-date">
        {parseTime(new Date(comment.time))}
      </span>
    </div>
  );
}

export default Comment;
