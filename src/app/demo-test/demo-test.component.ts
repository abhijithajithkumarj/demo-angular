import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css'
})
export class DemoTestComponent {

  title:string='Demo Componet'
  @Input() massage:string | undefined;


  constructor(){
    console.log('demo cheling');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('onchanges');
   console.log(changes);
   
   
    
  }

  ngOnInit(): void {

    
  }
  

}
