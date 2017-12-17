import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BackendService } from '../app/services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  menus: Model.Menu[];

  constructor(private backend: BackendService) {
  }
  ngOnInit() {
    this.backend.getMenu().subscribe((data: Model.Menu[]) => this.menus = data );
       }
  }
