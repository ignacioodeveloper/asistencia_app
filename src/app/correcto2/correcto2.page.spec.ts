import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Correcto2Page } from './correcto2.page';

describe('Correcto2Page', () => {
  let component: Correcto2Page;
  let fixture: ComponentFixture<Correcto2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Correcto2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
