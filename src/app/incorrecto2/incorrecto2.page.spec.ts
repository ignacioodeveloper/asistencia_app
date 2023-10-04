import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Incorrecto2Page } from './incorrecto2.page';

describe('Incorrecto2Page', () => {
  let component: Incorrecto2Page;
  let fixture: ComponentFixture<Incorrecto2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Incorrecto2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
