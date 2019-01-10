import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  success: boolean = true;
  dataFromService: Object = null;

  // Private data = initializing an instance of DataService which we can reference
  constructor(private data: DataService) { }

  ngOnInit() {
    // Do something when loading up
  }

  clickMe() {
    this.success = false;
    alert(this.data.clickMe());
    alert("Click me function invoked");
  }

  retrieveMadness() {
 
    this.data.httpMadness().subscribe(data=> {
      this.dataFromService = JSON.stringify(data);
    });
   
  }


}
