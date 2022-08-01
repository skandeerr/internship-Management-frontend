import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  function HeaderController($scope, $location) 
  { 
      $scope.isActive = function (viewLocation) { 
          return viewLocation === $location.path();
      };
  }
}
