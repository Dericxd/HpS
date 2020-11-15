import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any;

  constructor(private userService: UserService) {

    this.user = {
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      categoria: '',
      mjs: ''
    };
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((user)=>{
      console.log({user});
    });
  }

  onSubmit() {
    this.userService.postUsers(this.user).subscribe((usercreated) => {
      console.log({usercreated})
    })
    console.log(this.user);
  }

}
