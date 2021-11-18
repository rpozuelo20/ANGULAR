import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarapuestaComponent } from './insertarapuesta.component';

describe('InsertarapuestaComponent', () => {
  let component: InsertarapuestaComponent;
  let fixture: ComponentFixture<InsertarapuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarapuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarapuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
