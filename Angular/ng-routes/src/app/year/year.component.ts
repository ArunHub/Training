import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { YearService } from './year.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-year',
  templateUrl: 'year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
   selectedId: number;

  constructor(private routes: Router, private activatedRoute: ActivatedRoute, private yearService: YearService) {
    console.log('ssssssssssssss', routes.events.subscribe(t => console.log('xxxxxxxx', t)))
    console.log('activatedRoute', activatedRoute)

  }

  public year = 2018;
  public list$;//: Observable<any>;

  ngOnInit() {
   //   this.list$ = this.activatedRoute.paramMap.pipe(
   //    switchMap((params: ParamMap) => {
   //      // (+) before `params.get()` turns the string into a number
   //      this.selectedId = +params.get('id');
   //      console.log(this.yearService.yearList)
   //      return this.yearService.yearList;
   //    })
   // )

   this.list$ = this.yearService.yearList;
  }

  private changeFortune(id) {
    this.year++;
    this.routes.navigate(['/year', id])
    // this.routes.navigate(['../', { id: id, foo: 'foo' }], { relativeTo: this.route });
  }

}
