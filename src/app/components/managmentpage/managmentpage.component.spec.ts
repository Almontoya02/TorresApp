import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentpageComponent } from './managmentpage.component';

describe('ManagmentpageComponent', () => {
  let component: ManagmentpageComponent;
  let fixture: ComponentFixture<ManagmentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
