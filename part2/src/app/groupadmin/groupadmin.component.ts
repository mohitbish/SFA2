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
  selector: 'app-groupadmin',
  templateUrl: './groupadmin.component.html',
  styleUrls: ['./groupadmin.component.css']
})
export class GroupadminComponent implements OnInit {

  Groups: Groupobj[] = []
  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getGroups();
  }

  //gets groups from database
  getGroups(){
    this.httpClient.get<Groupobj[]>(BACKEND_URL + '/getgroups')
      .subscribe((data:any)=>{
        this.Groups = data;
        console.log(typeof(data), data);
      })
  }

  //remove group
  removegroup(Group:Groupobj){
    this.httpClient.post(BACKEND_URL + '/removegroup', Group)
      .subscribe((data:any)=>{
        this.Groups = data;
      })
  }

  //opens groupview
  opengroup(Group: Groupobj){
    localStorage.clear
    localStorage.setItem('Group', JSON.stringify(Group));
    this.router.navigateByUrl("/groupview");
  }

}
