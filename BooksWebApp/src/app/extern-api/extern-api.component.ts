import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ExternApiService } from '././../extern-api.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  switchMap
} from "rxjs/operators";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-view",
  templateUrl: "./extern-api.component.html",
  styleUrls: ["./extern-api.component.css"]
})
export class ExternApiComponent implements OnInit {
  items: any;
  //loading;
  queryField: FormControl = new FormControl();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ExternApiService
  ) {}

  ngOnInit() {
    //this.loading = false;
    this.queryField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((queryField: any) => {
        let te = queryField.replace(/\s/g, "");
        if (te.length > 2) {
          this.apiService.get(queryField).subscribe((result: any) => {
            //this.loading = true;
            setTimeout(() => {
              this.items = result.items;
            }, 2000);
          });
        }
      });
  }
  combineSlug(id) {
    return `${id}`;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
