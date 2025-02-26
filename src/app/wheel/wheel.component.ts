import { Component, AfterViewInit, ViewChild, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService } from '../my.service';
import { NamesService } from '../names.service';
import { Subscription } from 'rxjs'; // Import Subscription

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})
export class WheelComponent {
  names: string[] = []; // Your list of names
  winner: string | undefined = '';
  @ViewChild('wheel') wheel!: ElementRef;
  rotation: number = 0;


  subscription: Subscription | undefined; // Store the subscription
  constructor(private myService: MyService, private namesService: NamesService) {
    this.myService.doSomething();
  }

  
  spinWheel() {
    const segmentAngle = 360 / this.names.length;
    const randomSpins = Math.floor(5 + Math.random() * 10) * 360; // Ensures multiple full spins
    const randomSegment = Math.floor(Math.random() * this.names.length);
    const finalAngle = randomSegment * segmentAngle;

    this.rotation += randomSpins + finalAngle; // Ensures a precise stop at a segment
    this.wheel.nativeElement.style.transition = 'transform 4s ease-out';
    this.wheel.nativeElement.style.transform = `rotate(${this.rotation}deg)`;

    setTimeout(() => {
      const winningIndex = (this.names.length - randomSegment) % this.names.length;
      console.log('Winning Name:', this.names[winningIndex]);
      this.winner = this.names[winningIndex] + " wins!";
    }, 4000); // Wait for animation to complete
  }
  
  ngOnInit() {
    this.subscription = this.namesService.currentNames.subscribe(names => {
      this.names = names;
    });
  }
}
