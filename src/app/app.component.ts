import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription, from, map, subscribeOn } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('createButton')
  createButton :ElementRef  // storing the template reference 


  promisData=new Promise((resolve,reject)=>{
   resolve([22,52,52,5,25,11,542,5241,21,452,3])
  })

  myObservable =from([52,55,22,585,4.52,552,45])

  transformedObs=this.myObservable.pipe(map((val)=>{
    return val* 5


  }))

  title = 'demo-angular';


  data :any[]=[];

  createButtonObserveble;



  // // Observable
  // myObservable = new Observable((observer)=>{

  //    setTimeout(()=>{ observer.next (1) }, 5000)
  //    setTimeout(()=>{ observer.next (1753) }, 5000)
  //    setTimeout(()=>{ observer.next (1775375) }, 5000)
  //    setTimeout(()=>{ observer.next (745375) }, 5000)
  //    setTimeout(()=>{observer.error(new Error ('some thing wrrong'))},7000)
  //    setTimeout(()=>{ observer.next (43453) }, 5000)
  //    setTimeout(()=>{ observer.next (1) }, 5000)
  //    setTimeout(()=>{ observer.next (1) }, 5000)
   
  //   observer.next (2)  
  //   observer.next (1)  
  //   observer.next (15)  
  //   observer.next (186)  
  //   observer.next (1555)  
  //   observer.next (15256) 
  //   setTimeout(()=>{ observer.complete() }, 2000)
    
  // });

  //Observer
  GetAsyncData(){


    this.myObservable.subscribe({
      next :(val:any)=>{
        this.data.push(val);
      },
      error(err){
        alert(err.message)
      },

      complete(){
        alert('this is annother error')
      }
    })
  

    // //event listener
    // // callback function error,next ,complete
    // this.myObservable.subscribe((valu:any)=>{
    //   this.data .push(valu)
      
      
    // } ,
    // (error)=>{

    //   alert(error.message)
    // },
    // ()=>{
    //   alert('all the data has been')

    // }  setTimeout(()=>{ observer.complete() }, 5000)  setTimeout(()=>{ observer.complete() }, 5000)
    
    // );
    
    
  }

  buttonCliked(){
    this.createButtonObserveble=fromEvent(this.createButton.nativeElement,'click')
         .subscribe((data)=>{
          this.showItem()
          console.log(data);
          

    });
  }
  ngAfterViewInit(): void {
    this.buttonCliked();

  }

  showItem(){
    let div=document.createElement('div')
    div.innerText='Item'  
    document.getElementById('container').appendChild(div)

  }



}
