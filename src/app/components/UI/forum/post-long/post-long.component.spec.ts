import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLongComponent } from './post-long.component';

describe('PostLongComponent', () => {
  let component: PostLongComponent;
  let fixture: ComponentFixture<PostLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
