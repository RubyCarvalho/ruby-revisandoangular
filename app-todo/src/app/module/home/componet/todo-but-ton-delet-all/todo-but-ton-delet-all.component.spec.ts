import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButTonDeletAllComponent } from './todo-but-ton-delet-all.component';

describe('TodoButTonDeletAllComponent', () => {
  let component: TodoButTonDeletAllComponent;
  let fixture: ComponentFixture<TodoButTonDeletAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButTonDeletAllComponent]
    });
    fixture = TestBed.createComponent(TodoButTonDeletAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
