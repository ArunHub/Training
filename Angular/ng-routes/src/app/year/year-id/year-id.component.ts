import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { YearService } from '../year.service';

@Component({
   selector: 'app-year-id',
   templateUrl: './year-id.component.html',
   styleUrls: ['./year-id.component.css']
})
export class YearIdComponent implements OnInit {
   hero: any;

      constructor(
         private route: ActivatedRoute,
         private router: Router,
         private yearService: YearService
      ) { }

ngOnInit() {
   // this.hero = this.route.paramMap.pipe(
   //    switchMap((params: ParamMap) => this.yearService.getYear(params.get('id')))
   // )
}

}
