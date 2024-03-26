import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

 
  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
  // Additional properties and methods
  showPassword: boolean = false;
  showconfrimpass:boolean=false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleconfirmPasswordVisibility(){
    this.showconfrimpass = !this.showconfrimpass;
  }


  submitDetails() {
    if (this.registerForm.valid) {
      const postData = { ...this.registerForm.value };
      delete postData.confirmPassword; // Ensure this is necessary

      this.authService.registerUser(postData as User).subscribe(
        (response) => {
          console.log(response);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registration successful' });
          this.router.navigate(['login']);
        },
        (error) => {
          console.error(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Registration failed' });
          // You might want to handle different error scenarios here
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Form is invalid' });
    }
  }
}


