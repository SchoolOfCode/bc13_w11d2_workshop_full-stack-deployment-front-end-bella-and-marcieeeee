
export default function CompletedFilter({handleChange}){

    return (
<select onChange={handleChange}>
    <option value='all'>all</option>
    <option value='true' >completed</option>
    <option value='false'>to complete</option>
</select>
    )};