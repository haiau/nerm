export class Counter {
  private value: number;

  constructor(private id: number) {
    this.value = 0;
  }

  public increment() {
    this.value += 1;
  }

  public decrement() {
    this.value -= 1;
  }

  public getValue(): number {
    return this.value;
  }

  public getId(): number {
    return this.id;
  }
}