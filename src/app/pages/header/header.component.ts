import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm: any;

  
  

  constructor(
    
  ) {}

  ngOnInit(): void {
    
  }

  sidebarClicked() {
    
  }

  sidebarClose() {
    
  }

  get searchbar() {
    return this.searchForm.get('searchbar');
  }
  

  reset() {
    
  }

  menuClicked() {
    
  }

  gridViewClicked() {
    
  }

  searchNotes() {
    
  }

  navigateToSearch() {
    
  }

  logout() {
    
  }
}