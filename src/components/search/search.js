import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({onSearchChange})=>{

    const [search,setSearch] = useState(null)

    const loadOptions = (inputValue)=>{

        fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response =>{
            return{
                options: response.data.map((city)=>{
                    return{
                        value:`${city.latitude}${city.longitude}`,
                        label:`${city.name} ${city.countryCode}`,
                    };
                }),
            };
        })
        .catch(err => console.error(err));
    }
    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return(
        <AsyncPaginate 
            placeholder="Search for City"
            debounceTimeout={600} // how long wait untill send seach request 
            value={search} // Value should send
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;