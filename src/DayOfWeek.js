export default function DayOfWeek(props) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return <div>{days[props.day]}</div>
}