import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-modal',
  templateUrl: 'authentication-modal.component.html',
  styleUrls: ['./authentication-modal.component.css']
})
export class AuthenticationModal implements OnInit {

  constructor() { }

  ngOnInit() {
      let form = document.getElementById('form');
      let email = document.getElementById('email');
      console.log(email);
      let passwd = document.getElementById('passwd');
      console.log(passwd);

    //   form.addEventListener('submit', function(e) {
    //     e.preventDefault();
    // });
}

 public enviar(){

 }
 

}
