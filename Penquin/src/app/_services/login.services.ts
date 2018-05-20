import { Product } from './../product';
import { AuthService } from './auth.service';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private _authService: AuthService) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/api/authenticate', { 'email': username, 'password': password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', JSON.stringify(user.token));
                    //this.http.post<any>('http://localhost:3000/api/authenticate', { 'email': username, 'password': password })
                }
                //console.log(JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    status() {
        // remove user from local storage to log user out
        let currentUser = localStorage.getItem('currentUser');
        this.http.post<any>('http://localhost:3000/api/getusers', { 'x-access-token': currentUser })
            .pipe(map((response: Response) => {
                console.log('3');
                console.log(response);
                return response;
            }))
        return localStorage.getItem('currentUser');
    }

    register(model: any) {
        console.log(model.email);
        var headers = {
            'userid': model.email,
            'name': model.name,
            'gender': model.gender,
            'dateofbirth': new Date(model.dateofbirth).toDateString(),
            'email': model.email,
            'mobile': model.mobile,
            'password': model.password,
            'thumbnailurl': '',
            'isauthorized': 'false'
        }
        return this.http.post<any>('http://localhost:3000/api/register', headers)
            .pipe(map((response: Response) => {
                return response;
            }));
        //.catch(this.handleError);
    }

    getUsersData() {
        let currentUser = localStorage.getItem('currentUser');
        return this.http.post<any>('http://localhost:3000/api/getusers', { 'x-access-token': currentUser })
            .pipe(map((response: Response) => {
                return response;
            }));
    }

    getDashboardData(): Observable<any> {
        let currentUser = localStorage.getItem('currentUser');
        //console.log(currentUser);

        return this.http.post<any>('http://localhost:3000/api/getusers', { 'x-access-token': currentUser })
            .pipe(map(user => {
                //console.log(JSON.stringify(user));
                return user;
            }), catchError(this.handleError));
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}