import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit{

  

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(){
    let tripCode = localStorage.getItem("tripCode");

   
    if(!this.tripCode){
      alert("Something wrong, couldn't find where I stashed tripCode!")
      this.router.navigate(['']);
    }

    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
      })
      .catch(err =>{
        console.log('Error in delete', err);
      });
  }

  onDelete(){
      this.tripService.updateTrip(this.tripCode)
        .then(data =>{
          console.log(data);
          this.router.navigate([''])
        })
        .catch(err =>{
          console.log('Error in delete', err);
        })
  }

}
