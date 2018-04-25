import { Injectable, EventEmitter } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class HttpService extends Http {

    public serverError: EventEmitter<Response> = new EventEmitter();

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }
    /**
        * Performs any type of http request.
        * @param url
        * @param options
        * @returns {Observable<Response>}
        */
    request(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(url, options);
    }

    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.put(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.delete(this.getFullUrl(url), options)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }


    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers({ 'Content-Type': 'application/json' });
        }
        if (sessionStorage.getItem('accessToken')) {
            options.headers = new Headers({ 'Authentication-Code': sessionStorage.getItem('accessToken') });
        }
        return options;
    }

    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    private getFullUrl(url: string): string {
        // return full URL to API here
        return environment.baseUrl + url;
        // return '/api' + url;
    }

    /**
     * Request interceptor.
     */
    private requestInterceptor(): void {

    }

    /**
     * Response interceptor.
     */
    private responseInterceptor(): void {

    }

    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * onSubscribeSuccess
     * @param res
     */
    private onSubscribeSuccess(res: Response): void {
    }

    /**
     * onSubscribeError
     * @param error
     */
    private onSubscribeError(error: any): void {
        this.serverError.emit(error);
    }

    /**
     * onFinally
     */
    private onFinally(): void {
        this.responseInterceptor();
    }
}
