import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostObjectDetailComponent } from './post-object-detail.component';

describe('PostObjectDetailComponent', () => {
  let component: PostObjectDetailComponent;
  let fixture: ComponentFixture<PostObjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostObjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostObjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
