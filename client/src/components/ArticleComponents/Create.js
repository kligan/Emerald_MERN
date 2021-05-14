import React, {useState} from 'react';
import Axios from "axios";

function Create(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState(" ");
    const [tags, setTags] = useState("");

    const addToList =() =>{
        Axios.post("http://localhost:3001/insert",{
            title,
            description,
            tags,
            newtags: props.newtags,
            categories,
        })
        window.location.reload(false);
    }
    return (
        <div className="Article">
            <form>
                <h3>Create Article</h3>
                <div>
                    <p>Title</p>
                    <input type="text" name="title"  onChange={(event) =>setTitle(event.target.value)}></input></div>
                <div>
                    <p>Description</p>
                    <input type="text" name="description" onChange={(event) =>setDescription(event.target.value)}></input></div>
                <div>
                    <p>Choose Category</p>
                    <select name="categories" onChange={(event) =>setCategories(event.target.value)}>
                        <option value=""></option>
                        <option value="Video">Video</option>
                        <option value="Audio">Audio</option>
                        <option value="Quiz">Quiz</option>
                    </select></div>
                <div>
                    <p>Add a tag</p>
                    <input type="text" name="tags" onChange={(event) =>setTags(event.target.value)}></input>
                </div>
                <input type="button" placeholder="Submit" value="Submit" onClick={addToList}></input>
            </form>
        </div>   
    );
}

export default Create;