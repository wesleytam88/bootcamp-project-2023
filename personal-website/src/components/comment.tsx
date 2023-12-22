import { IComment } from "@/database/blogSchema";

// When we pass props, the name that we use to pass values is the key for the type
type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  const year: number = time.getFullYear();
  const month: string = time.toLocaleString("default", { month: "long" });
  const day: number = time.getDate();
  const hour: number = time.getUTCHours();
  const min: number = time.getMinutes();
  return `${day} ${month}, ${year} ${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}`;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="blog-comment">
      <h4 className="comment-user">{comment.user}</h4>
      <p className="comment-text">{comment.comment}</p>
      <span className="comment-date">
        {parseCommentTime(new Date(comment.time))}
      </span>
    </div>
  );
}

export default Comment;
