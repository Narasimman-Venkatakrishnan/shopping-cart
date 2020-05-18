import { Vehicle } from './vehicle';

describe('Vehicles', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Vehicle()).toBeTruthy();
  });
});
