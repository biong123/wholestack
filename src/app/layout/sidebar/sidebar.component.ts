import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconType, MenuGroup } from '../constant/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() menuGroups:MenuGroup[] = [];
  @Output() menuClickEvent = new EventEmitter<any>();

  menuClick(data:any){
    if(data){
      this.menuClickEvent.emit(data)
    }
    else{
      this.menuClickEvent.emit()
    }
  }

  get iconType(){
    return IconType;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
