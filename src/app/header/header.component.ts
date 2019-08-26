import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { newInterface } from '../newUser';
import { AuthTokenService } from '../auth-token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpService: MyServiceService,
    private auth: AuthTokenService) { }


  public allDetails: any = [];
  public allRepos: any = [];
  public check = false;
  public sortCheck = false;
  public buttonPress = true;
  public sortRecords: any = [];
  public tempSort = [];
  public sortAsc = [];
  sortingName: string;
  opendetailname = '';
  isDesc = false;
  total: number;
  lUsers: any[] = [
    { id: 0, Name: 'Sort By Name(A-Z)' },
    { id: 1, Name: 'Sort By Name(Z-A)' },
    { id: 2, Name: 'Rank ↑' },
    { id: 3, Name: 'Rank ↓' }
  ];
  curUser: any = this.lUsers[0];

  ngOnInit() { }

  setNewUser(event) {
    this.check = false;
    this.sortCheck = true;
    this.curUser = this.lUsers.filter(value => value.id === parseInt(event));
    // console.log(this.curUser);
    // this.httpService.getAllUsers().subscribe((response:newInterface[])=>
    // {
    //   this.sortRecords=response.map((x:newInterface)=>
    //   {
    //     return x;
    //   })
    //  this.sortRecords=response.filter((x)=>
    //  {
    //    this.total=x.length;
    //     return x;
    //  });
  }

  showByName(txtSearch) {
    const body = { q: txtSearch };
    this.auth.GET_METHOD('https://api.github.com/search/users?', body)
      .subscribe(
        response => {
          this.allDetails = response.items;
        });
  }

  getrepo(txtSearch) {
    this.opendetailname = txtSearch;
    this.allRepos = [];
    this.auth.GET_METHOD('https://api.github.com/users/' + txtSearch + '/repos', null)
      .subscribe(
        response => {
          this.allRepos = response;
        });
  }

  sort(name: string): void {
    if (name && this.sortingName !== name) {
      this.isDesc = this.sortCheck;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }
}