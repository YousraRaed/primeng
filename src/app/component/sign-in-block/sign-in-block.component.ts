import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-sign-in-block',
  templateUrl: './sign-in-block.component.html',
  styleUrls: ['./sign-in-block.component.scss'],
})
export class SignInBlockComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
