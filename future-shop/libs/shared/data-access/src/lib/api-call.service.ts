
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, of } from "rxjs";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/operators";


export const USE_DEFAULT_API = new InjectionToken<boolean>('default value is set to true');
export const DEFAULT_API = new InjectionToken<string>('default url is set to http://localhost:5000/');



@Injectable()
export class ApiCallService {
  headers: HttpHeaders;
  endPointBaseUrl: string;
  // Section For File Download
  fileHeaders: HttpHeaders;

  constructor(
      private httpClient: HttpClient, 
      @Inject(USE_DEFAULT_API)  private useDefaultApi:boolean = true,
      @Inject(DEFAULT_API) private defaultApi: string
      ) {
    this.headers = new HttpHeaders();

    if(this.useDefaultApi){
      this.endPointBaseUrl = "http://localhost:4200/"
    }
    else{
      this.endPointBaseUrl =this.defaultApi;
    }
    
   


    // Section For File Download
    this.fileHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "text/plain, */*")
      .set("Cache-Control", "no-cache");
  }

  

  public get<T>(controllerName: string, actionName: string, param: any = null): Observable<T> {
    let params: HttpParams = new HttpParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const value = param[key];
        if (value) {
          params = params.set(key, value);
        }
      }
    }
    const uniqueId = new Date().getTime();
    params = params.set("uniqueId", uniqueId.toString());
    return this.httpClient.get<T>(`${this.endPointBaseUrl}${controllerName}/${actionName}`, { params }).
      pipe(catchError(this.handleError));
  }

  public post<T>(controllerName: string, actionName: string, param: any): Observable<any> {
    return this.httpClient.post<T>(`${this.endPointBaseUrl}${controllerName}/${actionName}`, param)
      .pipe(catchError(this.handleError));
  }

  public delete(controllerName: string, actionName: string, param: any): Observable<any> {
    const options = {
      headers: this.headers, body: JSON.stringify(param)
    };
    return this.httpClient.delete(`${this.endPointBaseUrl}${controllerName}/${actionName}`, options)
      .pipe(catchError(this.handleError));
  }

  public put<T>(controllerName: string, actionName: string, param: any): Observable<any> {
    return this.httpClient.put<T>(`${this.endPointBaseUrl}${controllerName}/${actionName}`, param)
      .pipe(catchError(this.handleError));
  }

  public getTranslation(controllerName: string, actionName: string, param: any = null): Observable<any> {
    let params: HttpParams = new HttpParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const value = param[key];
        if (value) {
          params = params.set(key, value);
        }
      }
    }


    return this.httpClient.get(`${this.endPointBaseUrl}${controllerName}/${actionName}`, { params }).
      pipe(catchError(this.handleError));
  }

//   public postFile(controllerName: string, actionName: string, formData: any): Observable<FileViewModel> {

//     return this.httpClient.post<FileViewModel>(`${this.endPointBaseUrl}${controllerName}/${actionName}`, formData)
//       .pipe(catchError(this.handleError));
//   }

  // Section For File Download
  public getFile<T>(controllerName: string, actionName: string, param: any = null): Observable<any> {
    let params: HttpParams = new HttpParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const value = param[key];
        params = params.set(key, value);
      }
    }
    return this.httpClient.get<T>(`${this.endPointBaseUrl}${controllerName}/${actionName}`,
      { params, headers: this.fileHeaders, responseType: "blob" as "json" }).
      pipe(catchError(this.handleError));
  }

  public getStepsConfig(): Observable<any> {
    const steps: any = [
      { pageName: "Admissions", order: 1, alias: "Achievements" },
      { pageName: "Previous Education", order: 2, alias: "EducationDetails" },
      { pageName: "Proficiency Test", order: 3, alias: "ProficiencyTest" },
      { pageName: "Family", order: 4, alias: "FamilyGuardian" }
    ];
    return of(steps);

  }

 
  private handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(error);
    return throwError(errorMessage);
  }
}


