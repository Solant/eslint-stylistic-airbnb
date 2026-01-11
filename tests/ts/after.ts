interface MyInterface {
  foo(): string;
  bar: Array<number>;
}

export abstract class Foo implements MyInterface {
  foo() {
    // TODO: return an actual value here
    return 'hello';
  }

  get bar() {
    return [
      1,

      2,
      3,
    ];
  }
}

type RequestType = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'OPTIONS' | 'CONNECT' | 'DELETE' | 'TRACE';
