export class Validator {
  static get email() {
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
  }
}
