export default function Initials(props) {
    const splitted = props.name.split(' '); // [nicole, tsingauz]
    const initials = splitted[0][0] + '.' + splitted[1][0]
    return <div>{initials}</div>
}