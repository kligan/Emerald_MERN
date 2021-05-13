
import {useState,useEffect} from "react";
import Axios from 'axios';

function Loggedin() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleList, setTitleList] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [tags, setTags] = useState("");
    const [newtags, setNewTags] = useState(" ");
    const [categories, setCategories] = useState(" ");
    const [filterCategories, setFilterCategories] = useState(" ");
    const [extraList, setExtraList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/read")
            .then((response)=>{
                console.log(response.data)
                setTitleList(response.data)
                setExtraList(response.data)
            })
    },[])

    const addToList =() =>{
        Axios.post("http://localhost:3001/insert",{
            title: title,
            description: description,
            tags: tags,
            newtags: newtags,
            categories: categories,
        })
        window.location.reload(false);
        console.log(title, description)
    }

    const updateArticle = (id) =>{
        Axios.put("http://localhost:3001/update",{
            id: id,
            newTitle: newTitle,
        });
        window.location.reload(false);
    }

    const deleteArticle = (id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`);
        window.location.reload(false);
    }

    const addTag = (id) =>{
        Axios.put("http://localhost:3001/insertNew",{
            id: id,
            newtags: newtags,
        })
        window.location.reload(false);
    }

    const filterCategory = (event) =>{
        setFilterCategories(event.target.value)
        // alert(filterCategories)

        let filteredData = titleList.filter((item) => {
            return item.categories === event.target.value;
        });
        setTitleList(filteredData)
        console.log(event.target.value)
        if(event.target.value == ""){
            let filteredDataEmpty = extraList;
            // alert(8)
            setTitleList(filteredDataEmpty)
        }
        // this.setState({data: filteredData});
    }

    return (
        <div className="App">
            <div>
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
            <hr/>
            <div  className="Article">
                <div>
                    <h3>Search and Filter</h3>
                <p>Search by Title or Tags</p>
                    <input type="text" onChange={(event) =>setSearchTitle(event.target.value)}/></div>
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
            </div>
            <hr/>
            <h3>Articles</h3>
            <hr/>
            {titleList.filter((index)=>{
                if (searchTitle == ""){
                    return index
                }
                else if(index.title.toLowerCase().includes(searchTitle.toLowerCase()) || index.tags.toLowerCase().includes(searchTitle.toLowerCase())){
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
                            <input type="text" onChange={(event)=>{setNewTags(event.target.value)}}></input>
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
}

export default Loggedin;
