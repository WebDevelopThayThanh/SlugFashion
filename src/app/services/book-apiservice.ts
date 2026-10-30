import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBook } from '../classes/Book';

@Injectable({
  providedIn: 'root',
})
export class BookAPIService {
  constructor(private _http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  // 1. Lấy tất cả sách
  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };

    return this._http.get<any>("/books", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 2. Lấy 1 cuốn sách theo ID
  getBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };

    return this._http.get<any>("/books/" + bookId, requestOptions).pipe(
      map(res => JSON.parse(res) as IBook),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 3. Lọc sách theo khoảng giá
  getBooksByPriceRange(min: number, max: number): Observable<any> {
    const url = `/books/filter/price?min=${min}&max=${max}`;
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };

    return this._http.get<any>(url, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 4. POST: Thêm sách mới
  postBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };

    return this._http.post<any>("/books", JSON.stringify(aBook), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 5. PUT: Cập nhật / Sửa thông tin sách
  putBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };

    return this._http.put<any>("/books", JSON.stringify(aBook), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // 6. DELETE: Xoá sách theo ID
  deleteBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };

    return this._http.delete<any>("/books/" + bookId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }
}