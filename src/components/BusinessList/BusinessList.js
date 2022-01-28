import React from "react";
import './BusinessList.css';
import * as Business from './Business.js';

class BusinessList extends React.Component{
    render(){
        <div className="BusinessList">
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
        </div>
    }
}

export default BusinessList;