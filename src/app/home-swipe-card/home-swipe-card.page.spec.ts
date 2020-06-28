import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeSwipeCardPage } from './home-swipe-card.page';

describe('HomeSwipeCardPage', () => {
  let component: HomeSwipeCardPage;
  let fixture: ComponentFixture<HomeSwipeCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSwipeCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSwipeCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
