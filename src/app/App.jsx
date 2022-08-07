import React,{useState, useEffect} from 'react';
import "./App.css";
import {userData} from "./data";

const App = () => {
    const [users, setUsers] = useState([]);

    const onChangeHandler = (e) => {
        const {name, checked} = e.target;
        if(name === "allSelect"){
            let tempUser = users.map((user)=>(
                {...user, isChecked: checked}
            ))
            setUsers(tempUser);
        }else{
            let tempUser = users.map((user)=>(
                user.name === name ? {...user, isChecked: checked} : user
            ))
            setUsers(tempUser);
        }
        
    }

    useEffect(() => {
        setUsers(userData);
    },[])
    return (
        <div className="container p-4">
            <div className="header-box">
                <h1 className="header-text">Multi-Select</h1>
            </div>
            <div className="container-box">
                <div className="card">
                    <div className="card-header">
                        <input 
                            type="checkbox"
                            name="allSelect"
                            checked={users.filter(user => user?.isChecked === true).length === users.length}
                            onChange={onChangeHandler}
                        />
                        <label>Select All</label>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                users.length && users.map((user, i) => (
                                    <li key={i} className="list-group-item">
                                        <input 
                                            type="checkbox"
                                            name={user.name}
                                            checked={user?.isChecked || false}
                                            onChange={onChangeHandler}
                                        />
                                        <label>{user.name}</label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;