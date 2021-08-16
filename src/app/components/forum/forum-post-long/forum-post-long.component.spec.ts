import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumPostLongComponent } from './forum-post-long.component';

describe('ForumPostLongComponent', () => {
  let component: ForumPostLongComponent;
  let fixture: ComponentFixture<ForumPostLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumPostLongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumPostLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
