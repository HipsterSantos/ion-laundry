import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GestureController, GestureConfig} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../shared/user.interface';
import { UserService } from '../services/user.service';
import { Servicos } from '../shared/services.interface';

@Component({
  selector: 'main-tab',
  templateUrl: 'main-tab.page.html',
  styleUrls: ['main-tab.page.scss']
})
export class MainTabPage implements AfterViewInit, OnInit{
  @ViewChild('drawerone', {static: true}) drawer: ElementRef;
  @ViewChild('drawertwo', {static: true}) catcher: ElementRef;
  @ViewChild('headerwelcome', {static: true}) welcome: ElementRef;
  @ViewChild('headerlocation', {static: true}) location: ElementRef;
  @ViewChild('headername', {static: true}) headername: ElementRef;
  @ViewChild('itemsTop', {static: true}) itemsTop: ElementRef;
  user: User;
  services: Servicos[] = [
    {name: 'Lavagem', tag: 'lav', time: '2dias'},
    {name: 'Secagem', tag: 'sec', time: '2dias'},
    {name: 'Engomar', tag: 'eng', time: '2dias'},
    {name: 'Entrega', tag: 'ent', time: '2dias'}
  ];

  constructor(
    private elRef: ElementRef,
    private r2: Renderer2,
    private gestController: GestureController,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    ) {}

  ngOnInit(){
   this.user = this.userService.user;
  }

  goTop(){

      this.route.navigate(['all'], {relativeTo: this.activeRoute, queryParams: { service: 'lavagem'}});
      ( document.querySelector('#swiper') as HTMLStyleElement ).style.transition = 'all ease-in .1s';
      ( document.querySelector('#swiper') as HTMLStyleElement ).style.transform = 'translateY(11px)';
  }

  ngAfterViewInit(){
    this.r2.setStyle(this.location.nativeElement, 'transition', 'all ease-out .1s');
    this.r2.setStyle(this.welcome.nativeElement, 'transition', 'all ease-out .1s');
    this.r2.setStyle(this.headername.nativeElement, 'transition', 'all ease-out .1s');
    const config: GestureConfig = {
      gestureName: 'home-drawer',
      direction: 'y',
      el: this.catcher.nativeElement,
      onStart: () => {
        this.r2.setStyle(this.drawer.nativeElement, 'transition', 'all ease-out .1s');
        this.r2.setStyle(this.drawer.nativeElement, 'transform', `translateY(0px)`);
      },
      onMove: (event) => {
        this.r2.setStyle(this.drawer.nativeElement, 'transform', `translateY(${event.deltaY}px)`);
        console.log(event);
        if (event.deltaY > -60){
          // event.deltaY = 0;
          this.r2.setStyle(this.welcome.nativeElement, 'opacity', `0`);
          this.r2.setStyle(this.location.nativeElement, 'transform', `translateY(-50px)`);
        }
        else{

          this.r2.setStyle(this.welcome.nativeElement, 'opacity', `1`);
          this.r2.setStyle(this.location.nativeElement, 'transform', `translateY(0px)`);
        }

      },
      onEnd: (event) => {
          console.log(event);
          if (event.deltaY > -60){
            this.r2.setStyle(this.drawer.nativeElement, 'transform', `translateY(-67px)`);


          }else{
            this.r2.setStyle(this.drawer.nativeElement, 'transform', `translateY(${event.deltaY}px)`);
          }
      }

    };

    this.gestController.create(config).enable();
  }



}
