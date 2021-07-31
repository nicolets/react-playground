import CommentList from "./CommentList/CommentList";

export default function Article(props) {
    return <article>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <CommentList />
    </article>
}