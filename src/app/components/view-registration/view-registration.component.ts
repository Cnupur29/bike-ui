import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg: any;

  constructor(private bikeService: BikeService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params.id); // for this route in the latest snapshot for all the params pull id off 
  }

  getBikeReg(id:number) { // get id in this method using activatedRoute
    this.bikeService.getBike(id).subscribe( 
      data => {
        this.bikeReg = data;
      },
      err => {
        console.error(err);
      },
      () => console.log('bikes loaded')
    )
  }

}
