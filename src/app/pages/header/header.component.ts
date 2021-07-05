import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchInput: string | undefined;
  
  @Output() public sidebarClickedEvent = new EventEmitter();
  @Output() public menuClickedEvent = new EventEmitter();
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