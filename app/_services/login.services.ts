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
                    let token = JSON.stringify({ email: username, token: user.token })
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this._authService.setToken(token);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this._authService.removeToken();
    }

    register(model: any) {
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
        let token = this._authService.getUserToken();
        return this.http.post<any>('http://localhost:3000/api/getusers', { 'x-access-token': token })
            .pipe(map((response: Response) => {
                return response;
            }));
    }

    getDashboardData(): Observable<any> {
        let token = this._authService.getUserToken();
        return this.http.post<any>('http://localhost:3000/api/getusers', { 'x-access-token': token })
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