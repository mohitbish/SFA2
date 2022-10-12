import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userobj } from '../userobj';
import { Groupobj } from '../groupobj';
import { Channelobj } from '../channel';
import { Chatobj } from '../chat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods



@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {

  Groupname: String = "";
  User: Userobj = { Username : "", Password: "", Email : "", Role: ""}
  Chat: Chatobj = {Message:"", User:this.User }
  Channel: Channelobj = {Channelname:"", Userlist : [this.User], chatList:[this.Chat]}
  

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  addgroup(){
    console.log(this.Groupname)
    const Group = {Groupname: this.Groupname,Channellist: [this.Channel], userlist:[this.User] };
    this.httpClient.post(BACKEND_URL + '/addgroup', Group, httpOptions)
      .subscribe((data:any)=>{
        console.log(data);
        alert("added");
      })
  }

}