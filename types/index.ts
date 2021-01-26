export interface Book {
    title: string,
    ISBN: string
}

export class Book {
    id: string
    title: string
    ISBN: string
  
    constructor() {
      this.id = ''
      this.title = ''
      this.ISBN = ''
    }
  
    //get fullname(): string {
    //  return `${this.firstname} ${this.lastname}`
    //}
  }
  
  export type Books = Book[]
  
  export interface RootState {
    books: Books
}