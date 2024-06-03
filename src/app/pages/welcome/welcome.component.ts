import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  name: string = 'Tithi';
  password: string = '12345678';
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login() {
    console.log('called login')
    this.http.post('http://localhost:3000/login', {
      name: this.name,
      password: this.password,
    });
  }
}
