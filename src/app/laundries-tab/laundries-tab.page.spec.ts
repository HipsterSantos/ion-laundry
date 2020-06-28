import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LaundriesTabPage } from './laundries-tab.page';

describe('Tab2Page', () => {
  let component: LaundriesTabPage;
  let fixture: ComponentFixture<LaundriesTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaundriesTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LaundriesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
