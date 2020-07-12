import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { GestureController, GestureConfig} from '@ionic/angular';
import  {Router, ActivatedRoute, QueryParamsHandling, Params} from '@angular/router';
@Component({
  selector: 'app-home-swipe-card',
  templateUrl: './home-swipe-card.page.html',
  styleUrls: ['./home-swipe-card.page.scss'],
})
export class HomeSwipeCardPage implements OnInit , AfterViewInit {
  @ViewChild('holder') holder: ElementRef;
  constructor(
    private getController: GestureController,
    private elref: ElementRef,
    private r2: Renderer2,
    private router: Router,
    private activated: ActivatedRoute) { }


  ngOnInit() {
  }

 moveTo(){
  alert('navigating to items');
  this.router.navigate(['items'], {relativeTo: this.activated, queryParamsHandling:'merge'});
 }

  ngAfterViewInit(){

    const config: GestureConfig = {
    gestureName: 'anime-card',
    el: this.holder.nativeElement,
    direction: 'y',
    onStart: (event) => {
     this.r2.setStyle(this.elref.nativeElement, 'transform' , `translateY(${event.currentY}px)`);
    },
    onMove: (event) => {
      this.r2.setStyle(this.elref.nativeElement, 'transform' , `translateY(${event.currentY}px)`);
      console.log(event);
    },
    onEnd: (event) => {
      if (event.deltaY < 210 && event.deltaY < 530){
        this.r2.setStyle(this.elref.nativeElement, 'transform' , `translateY(${812}px)`);
      }
      // if (event.deltaY > 24){
      //   this.r2.setStyle(this.elref.nativeElement, 'transform' , `translateY(${11}px)`);
      // }
      console.log(event);

    }


    };

    this.getController.create(config).enable();

  }

}
