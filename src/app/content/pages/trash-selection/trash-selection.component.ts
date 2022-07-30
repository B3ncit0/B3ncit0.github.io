import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash-selection',
  templateUrl: './trash-selection.component.html',
  styleUrls: ['./trash-selection.component.css']
})
export class TrashSelectionComponent implements OnInit {
  items=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
