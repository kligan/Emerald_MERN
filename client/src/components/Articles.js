
import {useState,useEffect} from "react";
import Axios from 'axios';
import Create from './ArticleComponents/Create';
import Search from './ArticleComponents/Search';
import List from './ArticleComponents/List';

function Articles() {
    const [titleList, setTitleList] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [newtags, setNewTags] = useState(" ");
    const [extraList, setExtraList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/read")
            .then((response)=>{
                setTitleList(response.data)
                setExtraList(response.data)
            })
    },[])

    return (
        <div className="App">
            <Create newtags/>
            <hr/>
            <Search {...{titleList,setTitleList,setSearchTitle,extraList,setExtraList}}
            />
            <hr/>
            <List {...{newtags,titleList,searchTitle,setNewTags}}
            />
        </div>
    );
}

export default Articles;
