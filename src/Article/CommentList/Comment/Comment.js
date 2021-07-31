

export default function Comment(props) {
    return <div>
        <p>{props.content}</p> - By {props.author}
    </div>
}