import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactComponentComponent } from './edit-contact-component.component';

describe('EditContactComponentComponent', () => {
  let component: EditContactComponentComponent;
  let fixture: ComponentFixture<EditContactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditContactComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
