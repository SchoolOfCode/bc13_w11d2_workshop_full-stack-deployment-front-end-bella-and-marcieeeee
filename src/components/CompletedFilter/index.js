import './index.css'

export default function CompletedFilter({handleChange}){

    return (
<select onChange={handleChange}>
    <option value='all'>All</option>
    <option value='true' >Complete</option>
    <option value='false'>Uncomplete</option>
</select>
    )};