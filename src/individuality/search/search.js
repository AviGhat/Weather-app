import { AsyncPaginate } from "react-select-async-paginate"

const Search = () => {

    const [search, setSearch] = useState(null);

    const handleOnChange = (searchdata) => {
        setSearch(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600} //ensures api calls are requested at a reasonable pace
            value = {search}
            onChange = {handleOnChange}
        />
    )
}

export default Search