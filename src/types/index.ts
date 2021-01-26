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
  
  export type book = Book
  export type Books = Book[]

  export type Favorites = Book[]
  
  export interface RootState {
    book: Book, books: Books, favorites: Favorites
}