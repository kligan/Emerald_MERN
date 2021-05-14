import React, {useState} from 'react';

function Search(props) {
    const filterCategory = (event) =>{
        let targetValue = event.target.value;
        if(targetValue == ""){
            let filteredDataEmpty = props.extraList;
            props.setTitleList(filteredDataEmpty)
        }
        else if(targetValue !== ""){
            let filteredData = props.extraList.filter((item) => {
                return item.categories === targetValue;
            });
            props.setTitleList(filteredData)
        }
    }

    return (
        <div className="Article">
            <div>
                <h3>Search and Filter</h3>
                <p>Search by Title or Tags</p>
                <input type="text" onChange={(event) =>props.setSearchTitle(event.target.value)}/></div>
            <div>
                <p>Filter by category</p>
                <select name="categories" onChange={filterCategory}>
                    <option value="">Reset</option>
                    <option value="Video">Video</option>
                    <option value="Audio">Audio</option>
                    <option value="Quiz">Quiz</option>
                </select>
            </div>
        </div>
    );
}

export default Search;