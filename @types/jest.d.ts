declare namespace jest {
    interface Matchers<R> {
      toHaveTextContent(content: string | RegExp): R;
    }
  }
  