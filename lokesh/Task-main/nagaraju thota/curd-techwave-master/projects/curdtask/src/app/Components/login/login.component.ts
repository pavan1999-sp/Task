import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curd } from '../../ClassModel/curd';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  inputType = 'password';
  errorMsg = '';
  name: string = '';


  constructor(
    private fb: FormBuilder,
    private ls: LoginService,
    private router: Router
  ) { }

  showPassword(event: any) {
    if (event.target.checked) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      pwd: ["", Validators.required]
    })
  }
  login() {
    let email = this.loginForm.value.email;
    let pwd = this.loginForm.value.pwd;
    if (email != '' && pwd != '') {
      this.ls.getLogin(email).subscribe((res: Curd[]) => {
        if (res.length != 0) {
          if (pwd == res[0].pwd) {
            this.router.navigate(['navbar']);
          } else {
            this.errorMsg = `Your Password incorrect `;
          }
        } else {
          this.errorMsg = `Your email &&  Password incorrect / Please Register`;
        }
      });
    } else {
      this.errorMsg = `Enter your email and password`;
    }
  }


}
