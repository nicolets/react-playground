import Comment from "./Comment/Comment"

export default function CommentList() {
    return <div>
        <Comment content={"text"} author={"Nicole"} />
        <Comment content={"more text"} author={"Evyatar"} />
        <Comment content={"another text"} author={"Avi"} />
    </div>
}