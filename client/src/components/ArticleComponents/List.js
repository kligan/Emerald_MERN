import React, {useState} from 'react';
import Axios from "axios";

const List = (props) => {
    const [newTitle, setNewTitle] = useState("");

    const reload = () =>{
        return window.location.reload(false);
    }

    const updateArticle = (id) =>{
        Axios.put("http://localhost:3001/update",{
            id, newTitle,
        });
        reload();
    }

    const addTag = (id) =>{
        Axios.put("http://localhost:3001/insertNew",{
            id,
            newtags: props.newtags,
        })
        reload();
    }

    const deleteArticle = (id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`);
        reload();
    }

    return (
        <div>
            <h3>Articles</h3>
            <hr/>
            {props.titleList.filter((index)=>{
                let searchedTitle = props.searchTitle.toLowerCase();
                if (props.searchTitle == ""){
                    return index
                }
                else if(index.title.toLowerCase().includes(searchedTitle) || index.tags.toLowerCase().includes(searchedTitle)|| index.newtags.toLowerCase().includes(searchedTitle)){
                    return index
                }
            }).map((index,key)=>{
                return (
                    <div className="Article" key={key}>
                        <h4>Title: {index.title}</h4>
                        <p>Description: {index.description}</p>
                        <h5>Tags: #{index.tags}</h5>
                        <h5>{'#' + index.newtags}</h5>
                        <p>Category: {index.categories}</p>
                        <div className="AddTag">
                            <input type="text" onChange={(event)=>{props.setNewTags(event.target.value)}}></input>
                            <button onClick={()=>addTag(index._id)}>Add New Tag</button>
                        </div>
                        <div>
                            <input type="text" onChange={(event)=>{setNewTitle(event.target.value)}}></input>
                            <button onClick={()=>updateArticle(index._id)}>Update Title</button>
                        </div>
                        <div className="DeleteArticle">
                            <button onClick={()=>deleteArticle(index._id)}>Delete Article</button>
                        </div>
                        <br/>
                    </div>
                )
            })}
        </div>
    );
};

export default List;