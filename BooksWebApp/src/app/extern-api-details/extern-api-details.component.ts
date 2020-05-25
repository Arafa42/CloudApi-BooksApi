import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExternApiService } from '././../extern-api.service';

@Component({
  selector: "app-new",
  templateUrl: "./extern-api-details.component.html",
  styleUrls: ["./extern-api-details.component.css"]
})
export class ExternApiDetailsComponent implements OnInit {
  single;
  slug;
  sub;
  date;
  constructor(public apiService: ExternApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.SingleBlog();
  }
  SingleBlog() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params["product"];
      console.log(this.slug);
    });
    const slugURL = this.slug.split("-");
    const blogID = slugURL.pop();
    console.log(blogID);
    this.apiService.getBookData(blogID).subscribe(response => {
      this.single = response;
      console.log(this.single);
    });
  }
}
