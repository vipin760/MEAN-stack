1. debouncing
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  div{
    height: 100vh;
    align-items: center;
  }
</style>


<body>
  <div class="container">
    <button>clicked</button>
    <p>button pressed <span id="button_press" style="background-color: black; color: aliceblue;">0</span>times</p>
    <p>button triggred <span id="button_trigger" style="background-color: black; color: aliceblue;">0</span>times</p>
    </div>
    
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
  const btn = document.querySelector("button")
const btnPress = document.querySelector('#button_press')
const btnTrigger = document.querySelector('#button_trigger')


var buttonPress=0
var buttonTrigger=0
 

const debounceFun=_.debounce(()=>{
    btnTrigger.innerHTML = buttonTrigger++
},500)

btn.addEventListener('click',()=>{
    btnPress.innerHTML=buttonPress++
    debounceFun()
})
</script>
</body>
</html>

2. throttling
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  div{
    height: 100vh;
    align-items: center;
  }
</style>


<body>
  <div class="container">
    <button>clicked</button>
    <p>button pressed <span id="button_press" style="background-color: black; color: aliceblue;">0</span>times</p>
    <p>button triggred <span id="button_trigger" style="background-color: black; color: aliceblue;">0</span>times</p>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="app.js"></script>
  <script>
    const btn = document.querySelector('button')
const btnPressed = document.querySelector('#button_press')
const btnTrigger = document.querySelector('#button_trigger')

var btnPressCount = 0
var btnTriggerCount = 0
const tmieNow = new Date()
const throttleFun = _.throttle(()=>{
   btnTrigger.innerHTML= btnTriggerCount++
   let speed = new Date() - tmieNow
console.log(speed);
})




btn.addEventListener('click',()=>{
    btnPressed.innerHTML=btnPressCount++
    throttleFun()

})
  </script>
</body>
</html> 


3. debouncing polyfill

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="btn">
      <button>increment</button>
      <div class="content">
        <p>button pressed <span class="btn_press">0</span>times</p>
        <p>button triggered <span class="btn_trigger">0</span>times</p>
      </div>
    </div>
  </div>
<script src="app.js"></script>
<script>
  const btn = document.querySelector('button')
const btnpress = document.querySelector('.btn_press')
const btntrigger = document.querySelector('.btn_trigger')

var btnPressCount=0
var btnTriggerCount=0

const myDebounce = (cb,d)=>{
    let timer
        return function(...arg){
            if(timer) clearTimeout(timer)
             timer = setTimeout(() => {
                cb(...arg)
            }, d);
        }
}

const myMyDebounce= myDebounce(()=>{
    btnTriggerCount += 1
   btntrigger.innerHTML = btnTriggerCount
},800)


btn.addEventListener('click',()=>{
    btnpress.innerHTML = btnPressCount++
    myMyDebounce();
})
</script>
</body>
</html>

4. throttling polyfil
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="btn">
      <button>increment</button>
      <div class="content">
        <p>button pressed <span class="btn_press">0</span>times</p>
        <p>button triggered <span class="btn_trigger">0</span>times</p>
      </div>
    </div>
  </div>
<script src="app.js"></script>
const btn = document.querySelector('button')
const btnpress = document.querySelector('.btn_press')
const btntrigger = document.querySelector('.btn_trigger')

var btnPressCount=0
var btnTriggerCount=0

const throttleOne = (cb,d)=>{
    let last = 0
        return function(...arg){
             let now  = new Date().getTime();
             if(now-last<d) return;
             last = now
             return cb(...arg)
        }
}

const myMyDebounce= throttleOne(()=>{
    btnTriggerCount += 1
   btntrigger.innerHTML = btnTriggerCount
},1000)


btn.addEventListener('click',()=>{
    btnpress.innerHTML = btnPressCount++
    myMyDebounce();
})
</body>
</html>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
3. standalone components
allows to components stand alone
seperate from any angular module
make ceating new component easier
specify which feature each components specify
step :1
create a components simple-task

step :2
create a standalone components
// ng g components/completed-task --standalone
befor it will creating please check conole.log("working")

app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './partials/counter/counter.component';
import { StandAloneComponent } from './components/stand-alone/stand-alone.component';


@NgModule({
  declarations: [AppComponent, CounterComponent ],
  imports: [BrowserModule, AppRoutingModule, StandAloneComponent], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
4. trackby
step: 1
create a sample employeeData and model

step: 2
display in html
step: 3
create a new button and add more value using some function
and check development tools


step 4
next add new tackBy and give one name 

step 5
and inside the function passing 2 parameter and return as a string

step:1
   employeeDetails:Employee[]=[
    {name:"jhone", age:24, place:"Kerala" },
    {name:"sam" ,age:23 , place:"Tamilnadu"},
    {name:"adhi" ,age:25 , place:"Karnataka"},
    {name:"athul" ,age:26 , place:"Gujarath"},
    {name:"bavijith" ,age:27 , place:"Kerala"},
    {name:"sarath" ,age:21 , place:"Panjab"},
  ]
export class Employee{
    name!:string;
    age!:number;
    place!:string
}
step:2
<table>
<thead>
    <tr><th>index</th>
        <th>name</th>
        <th>age</th>
        <th>place</th>
    </tr>
</thead>
<tbody *ngFor="let a of employeeDetails index as index ; trackBy:refreshValue ">
    <tr>
        <td>{{index}}</td>
        <td>{{a.name}}</td>
        <td>{{a.age}}</td>
        <td>{{a.place}}</td>
    </tr>
</tbody>
</table>

step:3
<button (click)="refreshButon()">refresh</button>

refreshButon(){
this.employeeDetails=[
  {name:"jhone", age:24, place:"Kerala" },
  {name:"sam" ,age:23 , place:"Tamilnadu"},
  {name:"adhi" ,age:25 , place:"Karnataka"},
  {name:"athul" ,age:26 , place:"Gujarath"},
  {name:"bavijith" ,age:27 , place:"Kerala"},
  {name:"sarath" ,age:21 , place:"Panjab"},
  {name:"sarath1" ,age:21 , place:"Panjab"},
  {name:"sarath2" ,age:21 , place:"Panjab"},
  {name:"sarath" ,age:21 , place:"Panjab"},
  {name:"sarath1" ,age:21 , place:"Panjab"},
  {name:"sarath2" ,age:21 , place:"Panjab"},
]
}
step:4
<tbody *ngFor="let a of employeeDetails index as index ; trackBy:refreshValue ">

step:5
refreshValue (index:number, emplName:any):string{
  return emplName.name
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////
5. angular performance
Angular, like any framework, has a variety of best practices and techniques that can help improve performance. Here are some tips and strategies to enhance the performance of your Angular applications:

1. **Lazy Loading:** Implement lazy loading for feature modules. This means loading modules only when they are needed, reducing the initial load time of your application.

2. **Ahead-of-Time (AOT) Compilation:** Use AOT compilation to convert your templates and components into highly optimized JavaScript code during the build process. AOT compilation reduces the size of the bundle and speeds up rendering.

3. **Tree Shaking:** Ensure that you configure your build process to perform tree shaking. This process removes unused code from your final bundle, resulting in smaller and more efficient applications.

4. **Optimize Change Detection:** Be mindful of Angular's change detection mechanism. Minimize the number of components using Change Detection OnPush strategy and use immutable data structures to reduce unnecessary checks.

5. **Use TrackBy:** When rendering lists with `*ngFor`, use the `trackBy` function to improve rendering performance. This helps Angular to reuse existing elements in the DOM rather than recreating them.

6. **Optimize Rendering:** Avoid rendering the entire page when only a part of it changes. Utilize Angular's component structure and reactive patterns to update only the necessary parts.

7. **Service Workers:** Implement service workers to enable Progressive Web App (PWA) features, which can significantly improve the load time and offline capabilities of your application.

8. **Minimize HTTP Requests:** Reduce the number of HTTP requests by bundling and compressing assets and utilizing techniques like lazy loading and caching.

9. **Optimize Images:** Compress and optimize images to reduce their file size without compromising quality.

10. **Webpack Bundle Analysis:** Use tools like Webpack Bundle Analyzer to analyze your bundle size and dependencies. This helps you identify and eliminate unnecessary or large dependencies.

11. **Server-Side Rendering (SSR):** For SEO and initial load time improvements, consider implementing server-side rendering with Angular Universal.

12. **Web Workers:** Offload heavy computational tasks to web workers to prevent the main thread from being blocked, thus keeping your application responsive.

13. **PWA Strategies:** Implement progressive web app strategies to provide better offline capabilities, faster load times, and a smoother user experience.

14. **Optimize Third-Party Libraries:** Carefully choose and configure third-party libraries to minimize their impact on performance. Use Angular Universal for server-side rendering.

15. **Memory Management:** Pay attention to memory management. Angular provides mechanisms to help with this, such as OnDestroy and unsubscribing from observables.

16. **Code Splitting:** Use code splitting to split your application into smaller parts that can be loaded on-demand, reducing the initial load time.

17. **Performance Testing:** Regularly perform performance testing on your application to identify bottlenecks and areas for improvement. Tools like Lighthouse, WebPageTest, and browser developer tools can help with this.

18. **Production Mode:** Make sure your application is running in production mode, as this disables development-specific checks and optimizations.

Remember that performance improvements can be highly dependent on the specific requirements and architecture of your application. It's essential to profile and test your application to identify the most critical areas for optimization.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
6. ivy engine
faster meaningfull message less code to help remove code during build time
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
7. AOT vs JIT
   {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "aot": true,
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
8. MarkAsDirty
dirty when the control's value is changed through the UI; compare markAsTouched.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
9. MarkASPristine
  ## reset the "dirty" state of a form
  ##  control has not been modified by the use
  untouched
  ## Marks the control as untouched.
  touched
  ## A control is touched by focus and blur events that do not change the value. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
10. formarray

In Angular, a FormArray is a way to manage an array of form controls within a FormGroup. It's a part of the Angular Forms module and allows you to create dynamic lists of form controls. Each control within a FormArray can be of any type, including FormControl, FormGroup, or even nested FormArrays. It's useful when you need to work with a list of form elements, such as a list of input fields, checkboxes, or other form elements.
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <div formArrayName="items">
        <div *ngFor="let item of items.controls; let i = index">
          <input [formControlName]="i" placeholder="Item {{ i + 1 }}">
        </div>
      </div>
      <button (click)="addItem()">Add Item</button>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class MyFormComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      items: this.formBuilder.array([]),
    });
  }

  get items() {
    return this.myForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.formBuilder.control('')); // Add a new FormControl to the FormArray
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value); // You can access the values of the FormArray here
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
14. lazy loading
step : 1
create 2 components in stand alone login and signup and create 3rd one normal form user
step: 2
in user components inside create user routes in that user routes
import Route and set up path and components for login and sign up

step:3
and user.component.html apge set up butoon for both login and signup

step:4
app.routing.module open and set up path
{path: user, components:UserComponents, loadChild:()=> import('./components/homeComponents).then((com)=> com.user_login_reg.routes)}

 {path: 'user', component: UserComponent,
  loadChildren:()=> import('./components/user/user.routes').then((com)=>com.user_reg_log)
}

step: 5
create app.html page for user route inside the button


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

15. http interceptors
  create http interceptors
  and goto appmodule.ts
  providers:[{provide:HTTP_INTERCEPTORS, useClass:PageLoadingInterceptor, multi:true}],

step: 2

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
19. tree shaking
Tree shaking is a concept in JavaScript and build tools like Webpack that refers to the process of eliminating dead or unused code from your application's bundled JavaScript files during the build process. The term "tree shaking" comes from the idea of shaking a tree to make the dead leaves (unused code) fall off while keeping the healthy branches (used code).
benefits
Reduced File Size
improve perfomance
simplify code

To enable tree shaking, you should ensure that your build tool, such as Webpack, is configured to perform this optimization. In Webpack, this can be done by setting the mode to 'production' in your configuration, which automatically enables tree shaking. Additionally, make sure you use ES6 modules (import/export syntax) and ensure that your code is structured in a way that allows the build tool to analyze and remove unused code
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
20. polyfils
polymeric fills
Polyfills, short for "polymeric fills," are code or scripts that provide modern functionalities for web applications in environments that lack native support for these features. Polyfills help bridge the gap between the features available in newer versions of web browsers and older or less capable browsers, ensuring that your web application works consistently across different platforms.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
21. deadcode elimination
Dead code elimination (also known as code dead stripping or dead code removal) is a process in software development and optimization where unused or unreachable code is identified and removed from a program or codebase. The goal is to improve the efficiency and maintainability of the software while reducing its size and complexity.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
22. bundling
 multiple files, typically JavaScript, CSS, or other assets, are combined or "bundled" into a single file.
 JavaScript Bundling: 
 css Bundling: 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
23. minification
Minification is the process of reducing the size of a file by removing unnecessary characters and whitespace without affecting its functionality. Minification is commonly applied to web assets such as JavaScript, CSS, and HTML files to improve loading times and reduce the amount of data transferred over the internet.
Reasons for Minification:
Faster Loading:
Reduced Bandwidth:
Better Caching

Common Types of Minification:
html Minification
javascript Minification
css Minification
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
24. subject v/s observable
Subject" and "Observable" are both related to handling asynchronous data and event-driven programming
Observable:
 ## It represents a stream of data or events that can be observed over time.
 ## Observables are used to work with asynchronous data sources such as HTTP requests, user input, timers, and other asynchronous operations.
 ## they don't start emitting data until someone subscribes to them.
 ## An "observable" is an object or representation of a data stream that allows you to watch for and react to a sequence of values or events over time.
 

 subject:
## A "subject" is an entity or class that acts as both a producer and an observer. It is responsible for emitting data, events, or changes in a system.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
25. types of subjects
 ## BehaviorSubject: 
 always emits the most recent value to new subscribers,

 ## ReplaySubject
  emits all previously emitted items to new subscribers, 

## AsyncSubject: 
 last value of the sequence when the subject completes. only interested in the final result of a data stream.
## PublishSubject: 
## UnicastSubject:
## SerializedSubject:
## AsyncProcessor:
## PublishProcessor:

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

26. how to setup environment
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
28. rest principles constraints
Client-Server: 
Statelessness:
Cacheability
Uniform Interface: 
Layered System
Code-On-Demand

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
29. content negotiation
Content negotiation is a mechanism used in web communication to allow a client and a server to agree on the format of the data being exchanged. This negotiation ensures that both the client and server can understand and process the data in a mutually acceptable format. It's particularly important when dealing with HTTP requests and responses, as it allows clients to request data in a format they can handle, and servers to respond with data in the requested format
 ## HTTP Headers:
 ## File Extensions:
 ## Query Parameters:
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
30. api versioning
API versioning is a practice in software development where you provide multiple versions of your API to ensure backward compatibility while introducing new features or breaking changes. This practice allows developers to use the version of the API they are compatible with, preventing disruptions to existing applications when changes are made.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
31. preflight request
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
32. types of middlewares
## application middleware
ap.use
## built in middle ware
express.json()
express.urlencoded({ extended: true })

## third aprty middleware
morgen 
cors
body-parse
it will use extenral library using npm install
## router
code clean
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
33. types of index
Primary Index:
name:1
Secondary Index:
second colomn using unique value
Composite Index:
two filed index at the same timename,age
Unique Index:
Clustered Index:
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
34. shard key
distribute data across the multiple server
db.adminCommand({
  shardCollection: "yourDatabase.customer",
  key: { country: 1 }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
36. map and flat map
map create a new array by particular condition
flat map is used to spliting all values
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
37. function (pure and impure)
predicable function

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
38. factory function
create new object and return function factoryFun(a,b){
    
const obj ={
    name: a,
    age:b,
    greet: function(){
        console.log(this.name,this.age);
    }
}
return obj
}
let ob = new factoryFun("vipin",24)
ob.greet()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
40. file response
process of serving a file as a response to an HTTP request. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
41. cluster and workers
clusters
create multiple child processes, called workers

workers
worker operates independently and can handle requests, execute code, and perform tasks.
multi-core CPU environment, each worker can run on a separate CPU cor
const http = require('http')
const CPUs = require('os').cpus().length
const cluster = require('cluster')

if(cluster.isMaster){

    for(let i=0 ; i<CPUs ; i++){
        cluster.fork()
    }
    cluster.on('exit',(worker,code,signal)=>{
        cluster.fork()
    })
}else{

    http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end("heeloofdfjlbfij")
    }).listen(3000)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
46. quadratic probing
Time Complexity: O(N * L)
Space: O(1)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
50. merging
In MongoDB, the term "merging" is often associated with the process of updating or modifying existing documents in a collection. To merge data into a MongoDB document, you typically use update operations. I'll provide an example of how to perform a merge operation using the updateOne method in MongoDB.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
52. graph representation in memry
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
60. promise.any
return the output if any promise is fulliled 
promise.allsettled
all promise return resosolv and reject
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
64. replication 
the process of creating a copy of the same data set in more than one MongoDB server. 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
66. node concurrency
We can use concurrency when the order of doing tasks does not matter, and you can do multiple tasks at the same time without being dependent on the previous ..
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
67. litterals
Literals are just a way to tell JavaScript what you mean, so it can do the right thing with your data.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
68. optional chaining
Optional chaining is like asking a series of "safe" questions about an object's properties. It lets you find out if something exists without causing a problem if it doesn't.

const person = {
  name:{
    address:{
      city:"new York"
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

68. nullish operators
const name="vipi"
const val = name??'fhjdh'
console.log(val);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
70. app.all

it will working all middleware for the same path name
app.get('/') api
app.all('/') http method
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
72. highier order
one function take another function as a argument
function applyOperation(x, operation) {
  return operation(x);
}

function double(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

console.log(applyOperation(5, double));  // Output: 10
console.log(applyOperation(5, square));  // Output: 25

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
73. first order function
A first-order function is like a regular function. It takes some data as input, processes it, and returns a result, but it doesn't deal with functions as arguments or results.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
74. fork
This allows you to run multiple instances of your Node.js application in separate child processes, enabling parallel processing and improved performance. 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
