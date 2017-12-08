import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostObjectComponent } from './post-object.component';

describe('PostObjectComponent', () => {
  let component: PostObjectComponent;
  let fixture: ComponentFixture<PostObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
