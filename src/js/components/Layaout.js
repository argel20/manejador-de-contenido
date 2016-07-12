import React from "react";
import $ from 'jquery';
import GenerateText from "./inputs/GenerateText";
import GenerateListApi from "./inputs/GenerateListApi";
import Header from "./views/Header";
import Body from "./views/Body";
import SideBar from "./views/SideBar";

export default class Layaout extends React.Component {
  render() {
    return (
     <div className="container layaout">
      <div class="row well">
      <div class="col-md-12">
        <Header/>
      <div class="col-md-12 ">
        <Body/>
        <SideBar/>
      </div>
        <div class="col-md-12">
        <GenerateText/>
        <GenerateListApi/>
        </div>
        </div>

      </div>
    </div>
    );
  }
};
