import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  public languages = [
    'HTML',
    'CSS',
    'Sass',
    'JavaScript',
    'TypeScript',
    'PHP',
    'SQL',
    'Java'
  ];

  public frameworks = [
    'Ionic',
    'Angular',
    'Capacitor',
    'Cordova',
    'Laravel',
    'Tailwind',
    'WebSockets'
  ];

  public applications = [
    'Node.js',
    // 'Composer',
    'MySQL',
    'Visual Studio Code',
    'Xcode',
    'Android Studio',
    'Postman',
    'Photoshop',
    'Illustrator',
  ];

  public platforms = [
    'Git',
    'AWS',
    'Firebase',
    'Google Cloud',
    'WordPress',
    'Apache',
    'App Store Connect',
    'Google Play',
    
  ];

  public workYears = this.calculateAge(new Date(2016, 1, 21));

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
