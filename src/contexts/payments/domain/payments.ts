export interface PrimitivePayment {
  id: string;
  amount: number;
  customerId: string;
}

export class Payments {
  constructor(private atrbutes: PrimitivePayment[]) {}

  static create(createPayment: { amont: number; customerId: string }) {
    return new Payments([
      {
        id: '123',
        amount: createPayment.amont,
        customerId: createPayment.customerId,
      },
    ]);
  }
}
