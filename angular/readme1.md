Answers
..............................
1. angular
2. typescript
3. component
4. template
5. module
6. directive
7. what is the defference btween directive and component
8. ng model directive
9. ng-content
10. ng-template
2.39
11. ng-container define its type
12. ng class directives(4 use case)
13. ngstyle
14. ngFor
15. ngIf
16. ngSwitch
17. property binding
18. event binding
19. Data binding(6 types)
20. interpolation
21. two way binding 
22. service
23. dependency injection
24. @ijectable decerator
25. Router and router service
26. router link
//////////////////////////////////////////////////////
27. pipe
create a custome pipe
 <td>{{item.name | changeName:1 }}</td>

 pipe.ts
 import { Pipe } from "@angular/core";

@Pipe({
    name:'changeName'
})

export class changeName{
    transform(value:any, limit:number){
        if(value.length>limit){
           return value.substr(0,limit)+'.....'
        }
        return value
    }
}

app.module
changeName declare

//////////////////////////////////////////////////////
28. async pipe
29. pure pipe
30. impure pipe
31. observable
32. rxjs
33. aot
34. jit
35. subsription class in rxjs
36. behaviuor subject in rxjs
37. subject class in rxjs
38. guard 
39. resolve guard 
40. activate route
41. can Deactivate
42. can activate
43. @iput decerator
44. @output decerator
45. event Emitter
46. view child decerator
47. content child decerator
48. content children
49. view children decerator
50. ng module decerator
51. host binding
52. host listener
53. common module
54. bowser module
55. HttpClient
56. HttpClientTestingModule
57. FormsModule
58. RouterModule
59. lazy loading
60. ChangeDetectionStratergy
61. ngZone
62. FormBuilderService
63. renderer2 service
64. trackBy
65. tem[late reference varriable
66. ElementRef
67. ViewEncapsulation
68. angular universal
69. ivy compiler
70. view engine
71. QueryList class
72. ActivatedRouteSnapShot
73. RouterStateSnapshot
74. Validators class
75. HttpHeaders Class
76. HttpParams class
/////////////////////////////////////////////////////////////////////////////////////////
77. HttpInterceptors
implimenting common interceptors

import{HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("request sending reach your interceptor");        
    return next.handle(req)   
    }
}

app.module
 providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
  ],


  modify interceptors
  intercept(req:HttpRequest<any> , next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("working");
    const urlheader = req.clone({
        headers:req.headers.append('name','vipin')
    })
    return next.handle(urlheader)
}


  return next.handle(urlheader).pipe(tap((event)=>{
        console.log(event);
        console.log("response interceptor");
        if(event.type === HttpEventType.Response){
            console.log(event.body);
            
        }
        
    }))
/////////////////////////////////////////////////////////////////////////////////////////
78. component and module
79. angular architecture
80. FormArray
81. NPM
82. Life cycle hooks
83. sigleton service
84. slice pipe
85. similarity b/t ngOnInit and constructor
86. TestBed utitlity
87. async and fake async function
88. component fixture utility
89. testbed configure TestingModule
90. tick
91. ngOptimizedImage
92. stand alone