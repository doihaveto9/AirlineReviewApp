import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  id: any = sessionStorage.getItem('id');

  constructor(
    private authService: AuthService,
    private router: Router){
    
  }

  async logOut(){
    const status = await this.authService.signOut();

    if(status){
      sessionStorage.removeItem('id');
      alert("Log Out Successful!");
      this.router.navigateByUrl('/log-in');
    }
    else {
      alert("Log Out Unsuccessful!")
    }
  }
}
