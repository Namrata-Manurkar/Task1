import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  username:string;
  txtSearch1:string;
  userDeatails=[];

  constructor(private http:HttpClient) 
  { 
      // this.username="kirandash";
  }
  GET_BY_Name(txtSearch)
  {
    // txtSearch="kirandash";
    // this.http.get("https://api.github.com/search/users?q={search-string}");
    // this.http.get("https://api.github.com/search/users?q={user}");
    return this.http.get("https://api.github.com/users/"+txtSearch);
  }
  getProfileRepos(txtSearch)
  {
    // this.txtSearch1="kirandash";
    return this.http.get("https://api.github.com/users/"+txtSearch+"/repos");
  }
  getAllUsers()
  {
    return this.http.get("https://api.github.com/users");
  }
  getSortAsc()
  {
    return this.http.get("https://api.github.com/users");
  }

  // this.auth.GET_METHOD("https://api.github.com/users/varada/repos", null)
  //     .subscribe(
  //       response => {
  //         this.notification.loadingHide();
  //         if (response.status === 1) {
  //           console.log(response.data);
  //         }
  //       }
  //     );

}
