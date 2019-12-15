import { Component, Inject, HostListener, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { DashboardService } from './shared/services/dashboard.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Hostpital";
  itemsMenu = [];

  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document, private dashboardService: DashboardService) {}
  // @HostListener("window:scroll", [])

  ngOnInit(): void {
    this.dashboardService.getAllCategory().subscribe(data => {
      this.itemsMenu.push({text: 'Trang chủ', url: '#/home'});
      data = data.sort((a, b) => a.ICArticleCategorySortOrder > b.ICArticleCategorySortOrder ? 1 : -1);
      data.forEach(item => {
        const itemMenu = {
          text: item.ICArticleCategoryName
        }
        this.itemsMenu.push(itemMenu);
      });
      this.itemsMenu.push({text: 'Liên hệ', url: '#/contact'});
    });
  }
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
