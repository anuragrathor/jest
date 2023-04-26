import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Exact Equality
  it('four plus one is five', () => {
    expect(4+1).toBe(5);
  });

  //Testing Object 
  it('Object Values', () => {
    const data = {name : "AnuragRathore"};
    expect(data).toEqual({name: "AnuragRathore"});
  });

  //Truthiness
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });


  //Numbers 

  it('Two Plus two', () => {
    const values = 2+2;
    expect(values).toBeGreaterThan(3);
    expect(values).toBeGreaterThanOrEqual(3.5);
    expect(values).toBeLessThan(5);
    expect(values).toBeLessThanOrEqual(4.5);

    //toBE and toEqual are equivalent for numbers
    expect(values).toBe(4);
    expect(values).toEqual(4);
  });


  it('Adding floating point numbers', () => {
    const values = 0.1+ 0.2;
    expect(values).toBeCloseTo(0.3);
  });


  //Strings 

  it('There is no D in techops', () => {
    expect('techops').not.toMatch(/D/);
  });

  it('But there is a "world" in technopsworld', () => {
    expect('techopsworld').toMatch(/world/);
  });


  //Arrays and iterables 
  it('the shopping list has milk on it', () => {
    const shoppinglits = [
      'diaper',
      'milk',
      'tea',
      'bag',
      'towel',
    ];

    expect(shoppinglits).toContain('milk');
    expect(new Set(shoppinglits)).toContain('milk');
    jest.spyOn
  });


  //Exceptions

  it('compiling android goes as expected', () => {
    expect(() => component.compileAndroidcode()).toThrow();
    expect(() => component.compileAndroidcode()).toThrow(Error);

    expect(() => component.compileAndroidcode()).toThrow('You are using old angular');
    expect(() => component.compileAndroidcode()).toThrow(/angular/);

  });

});
