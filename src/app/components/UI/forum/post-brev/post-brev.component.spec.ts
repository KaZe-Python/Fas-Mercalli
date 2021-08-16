import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBrevComponent } from './post-brev.component';

describe('PostBrevComponent', () => {
  let component: PostBrevComponent;
  let fixture: ComponentFixture<PostBrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
