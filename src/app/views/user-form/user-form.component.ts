import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { ConfirmPasswordValidator } from "../../must-match/validate-password";


@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  othersList: any = ['Height', 'Weight', 'Disease']
  
  constructor(private formBuilder: FormBuilder) {}

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      // lastName: ['', Validators.required],
      // validates date format yyyy-mm-dd
      dob: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ]),
      gender: new FormControl("true", [Validators.required]),
      others : new FormControl('',Validators.required),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
      confirmPassword:new FormControl('', Validators.required),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),
    });
  }

  doesPasswordMatch() {
    console.log(this.registerForm.get("password").value ==
    this.registerForm.get("confirmPassword").value);
    
    return (
      this.registerForm.get("password").value ==
      this.registerForm.get("confirmPassword").value
    );
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  log(){
    console.log(this.registerForm.value.password,this.registerForm.value.confirmPassword);
    console.log(this.registerForm.value.password == this.registerForm.value.confirmPassword);
    
  }
}
