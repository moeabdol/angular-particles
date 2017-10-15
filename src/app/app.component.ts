import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;
declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    particlesJS.load('particles', 'assets/particles.json', null);

    const svg = Snap('#svg');
    this.loadBranding(svg);
    this.loadArchitecture(svg);
    this.loadDigital(svg);
    this.loadSolutions(svg);
  }

  loadBranding(svg) {
    const brandingCircle = svg.circle(50, 50, 10);
    brandingCircle.attr({
      fill: 'black',
      stroke: 'white',
      strokeWidth: .2
    });

    const brandingText = svg.text(45.2, 50.8, 'Branding');
    brandingText.attr({
      fill: 'white',
      fontFamily: 'helvetica',
      fontSize: '2.5px'
    });
    setInterval(() => {
      brandingText.animate({ transform: 's1.1' });
    }, 1000);

    const brandingGroup = svg.group(brandingCircle, brandingText);
    brandingGroup.transform('t-25,-15');

    function startAnimateion() {
      brandingCircle.animate({ transform: 's1.05' }, 2000, mina.easeInOut, () => {
        brandingCircle.animate({ transform: 's1' }, 2000, mina.easeInOut);
      });
    }

    startAnimateion();

    setInterval(() => {
      startAnimateion();
    }, 4000);
  }

  loadArchitecture(svg) {
    const architectureCircle = svg.circle(50, 50, 10);
    architectureCircle.attr({
      fill: 'black',
      stroke: 'white',
      strokeWidth: .2
    });

    const architectureText = svg.text(43.5, 50.8, 'Architecture');
    architectureText.attr({
      fill: 'white',
      fontFamily: 'helvetica',
      fontSize: '2.5px'
    });

    const architectureGroup = svg.group(architectureCircle, architectureText);
    architectureGroup.transform('t25,-15');

    function startAnimateion() {
      architectureCircle.animate({ transform: 's1.05' }, 2500, mina.easeInOut, () => {
        architectureCircle.animate({ transform: 's1' }, 2000, mina.easeInOut);
      });
    }

    startAnimateion();

    setInterval(() => {
      startAnimateion();
    }, 4500);
  }

  loadDigital(svg) {
    const digitalCircle = svg.circle(50, 50, 10);
    digitalCircle.attr({
      fill: 'black',
      stroke: 'white',
      strokeWidth: .2
    });

    const digitalText = svg.text(46.6, 51, 'Digital');
    digitalText.attr({
      fill: 'white',
      fontFamily: 'helvetica',
      fontSize: '2.5px'
    });

    const digitalGroup = svg.group(digitalCircle, digitalText);
    digitalGroup.transform('t-25,15');

    function startAnimateion() {
      digitalCircle.animate({ transform: 's1.05' }, 2300, mina.easeInOut, () => {
        digitalCircle.animate({ transform: 's1' }, 2200, mina.easeInOut);
      });
    }

    startAnimateion();

    setInterval(() => {
      startAnimateion();
    }, 4500);
  }

  loadSolutions(svg) {
    const solutionsCircle = svg.circle(50, 50, 10);
    solutionsCircle.attr({
      fill: 'black',
      stroke: 'white',
      strokeWidth: .2
    });

    const solutionsText = svg.text(44.9, 51, 'Solutions');
    solutionsText.attr({
      fill: 'white',
      fontFamily: 'helvetica',
      fontSize: '2.5px'
    });

    const solutionsGroup = svg.group(solutionsCircle, solutionsText);
    solutionsGroup.transform('t25,15');

    function startAnimateion() {
      solutionsCircle.animate({ transform: 's1.05' }, 2200, mina.easeInOut, () => {
        solutionsCircle.animate({ transform: 's1' }, 2200, mina.easeInOut);
      });
    }

    startAnimateion();

    setInterval(() => {
      startAnimateion();
    }, 4400);
  }
}
