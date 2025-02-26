import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-names',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './names.component.html',
  styleUrl: './names.component.css'
})
export class NamesComponent implements OnInit {
  //names: string[] = []; // Initialize an array
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David']; // Initialize an array
  newName: string = ''; // For the input field

  constructor(private namesService: NamesService) {}
  
  ngOnInit(): void {
    this.sendNames();
  }

  sendNames() {
    this.namesService.updateNames(this.names);
  }

  addName() {
    if (this.newName.trim() !== '') { // Prevent adding empty names
      this.names.push(this.newName.trim()); // Add the name to the array
      this.newName = ''; // Clear the input field
    }
    this.sendNames();
  }

  removeName(index: number) {
    this.names.splice(index, 1); // Remove the name at the given index
    this.sendNames();
  }
}
