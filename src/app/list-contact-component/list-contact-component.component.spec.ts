import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactComponentComponent } from './list-contact-component.component';

describe('ListContactComponentComponent', () => {
  let component: ListContactComponentComponent;
  let fixture: ComponentFixture<ListContactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContactComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
