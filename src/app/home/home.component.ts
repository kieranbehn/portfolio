import { Component, OnInit } from '@angular/core';
import { EasingType, IOptions, RecursivePartial, RotateDirection } from 'tsparticles';
import TypeIt from 'typeit';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  instance: any;

  particlesOptions: RecursivePartial<IOptions> = {
    backgroundMode: {
      enable: true,
      zIndex: 5,
    },
    background: {
        color: {
            value: "transparent"
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 1,
                speed: 0.05,
                easing: EasingType.easeOutCirc,
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 50,
            enable: false,
            opacity: 0.25,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 1,
            straight: false
        },
        rotate: {
          random: true,
          value: {min: 0, max: 360}
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 20
        },
        opacity: {
            value: 0.20
        },
        shape: {
            type: "triangle",
        },
        size: {
            value: { min: 2, max: 7 }
        }
    },
    detectRetina: true
  };

  public logos: {
    name: string,
    img: string,
    showName?: boolean,
  }[] = [
    {
      name: 'HTML5',
      img: 'assets/img/html5.svg'
    },
    {
      name: 'Sass',
      img: 'assets/img/sass.svg'
    },
    {
      name: 'TypeScript',
      img: 'assets/img/typescript.svg'
    },
    {
      name: 'Ionic',
      img: 'assets/img/ionic.svg'
    },
    {
      name: 'Angular',
      img: 'assets/img/angular.svg'
    },
    {
      name: 'Cordova',
      img: 'assets/img/cordova.svg'
    },
    {
      name: 'NodeJS',
      img: 'assets/img/node-js.svg'
    },
    {
      name: 'Laravel',
      img: 'assets/img/laravel.svg'
    },
    {
      name: 'PHP',
      img: 'assets/img/php.svg'
    },
    {
      name: 'Firebase',
      img: 'assets/img/firebase.svg'
    },
    {
      name: 'iOS',
      img: 'assets/img/apple.svg'
    },
    {
      name: 'Android',
      img: 'assets/img/android.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    const nameEle: any = document.querySelector(".name-tilt");
    VanillaTilt.init(nameEle, {
      reverse: true,
      "full-page-listening": true
    });
    const boxEle: any = document.querySelector(".box-tilt");
    VanillaTilt.init(boxEle, {
      "full-page-listening": true
    });
    const logosEle: any = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(logosEle, {
      max: 5
    });
    this.typeit();
  }

  public logoName(logo: any) {
    if (!logo.showName) {
      logo.showName = true;
      setTimeout(() => {
        logo.showName = false;
      }, 1000);
    }
  }

  typeit() {
    if (this.instance) { this.instance.destroy(); }
    this.instance = new TypeIt("#typewriter", {
      loop: true
    })
      .type('web')
      .pause(1500)
      .delete()
      .type('app')
      .pause(1500)
      .delete()
      .type('fullstack')
      .pause(500)
      .move(-5)
      .type('-')
      .move(5, {instant: true})
      .pause(3000)
      .delete()
      .go();
  }

}
