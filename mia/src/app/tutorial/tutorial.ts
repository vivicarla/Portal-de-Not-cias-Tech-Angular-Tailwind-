import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  imports: [RouterLink, CommonModule],
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
})
export class Tutorial {}
