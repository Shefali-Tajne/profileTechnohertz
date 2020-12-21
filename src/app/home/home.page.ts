import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   @ViewChild('signupSlider') signupSlider: any;

   uploadphoto = '/assets/uploadImg.png';
   uploadsig   ='/assets/signature.jpg';
   uploadresume ='';
   @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  isLinear = false;
   public slideOneForm: FormGroup; 
   public slideTwoForm: FormGroup; 
   public slideThreeForm: FormGroup; 
   constructor(public formbuilder : FormBuilder, 
              private navCtrl : NavController,
              public _d: DomSanitizer,
              public alertCtrl: AlertController
               ) {
               this.slideOneForm = this.formbuilder.group({
                        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
                        gender: ['', Validators.compose([Validators.required])],
                        mobile: ['', Validators.compose([Validators.pattern("(0/91)?[7-9][0-9]{9}"), Validators.required])],   
                    });
                    this.slideTwoForm = this.formbuilder.group({
                        email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.required])],
                        password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(30), Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$()^!%*?&])([a-zA-Z0-9#@()!%*^?&]{8,})$')])],
                        city: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
                        address: ['',Validators.compose([Validators.required, Validators.maxLength(100)])],
                        zip: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')])]
                    });
               
                    this.slideThreeForm = this.formbuilder.group({
                     uploadPhoto: ['', Validators.compose([Validators.required])],
                     uploadSig: ['', Validators.compose([Validators.required])],
                     uploadResume: ['', Validators.compose([Validators.required])],
                     
                    });
            }

            ngOnInit(): void {
               //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
               //Add 'implements OnInit' to the class.
               this.addRecaptchaScript();
            }
            renderReCaptcha() {
               window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
                 'sitekey' : '6Lfn9A4aAAAAAJ2ko7RZcCLWFmqTC5cGpbcN0bA3',
                 'callback': (response) => {
                     console.log(response);
                 }
               });
             }
             addRecaptchaScript() {
 
               window['grecaptchaCallback'] = () => {
                 this.renderReCaptcha();
               }
              
               (function(d, s, id, obj){
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) { obj.renderReCaptcha(); return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
                 fjs.parentNode.insertBefore(js, fjs);
               }(document, 'script', 'recaptcha-jssdk', this));
              
             }
          get firstName() {
            return this.slideOneForm.get("firstName");
          }
          get lastName() {
            return this.slideOneForm.get("lastName");
          }
          get gender() {
            return this.slideOneForm.get("gender");
          }
          get mobile() {
            return this.slideOneForm.get("mobile");
          }
          get email() {
            return this.slideTwoForm.get("email");
          }
          get password() {
            return this.slideTwoForm.get("password");
          }
          get city() {
            return this.slideTwoForm.get("city");
          }
          get address() {
            return this.slideTwoForm.get("address");
          }
          get zip() {
            return this.slideTwoForm.get("zip");
          }
          get uploadPhoto() {
            return this.slideThreeForm.get("uploadPhoto");
          }
          get uploadSig() {
            return this.slideThreeForm.get("uploadSig");
          }
          get uploadResume() {
            return this.slideThreeForm.get("uploadResume");
          }


          public errorMessages = {
            firstName: [
              { type: 'required', message: 'First Name is required' },
              { type: 'maxlength', message: 'First Name can not be longer than 30 characters' }
            ],
            lastName: [
              { type: 'required', message: 'Last Name is required' },
              { type: 'maxlength', message: 'Last Name can not be longer than 30 characters' }
            ],
            gender: [
              { type: 'required', message: 'Gender is required' }
            ],
            mobile: [
              { type: 'required', message: 'Mobile is required' },
              { type: 'maxlength', message: 'Mobile number should be 10 digit'},
              { type: 'pattern', message: 'Enter valid mobile number' }
            ],
            email: [
               { type: 'required', message: 'Email is required' },
               { type: 'pattern', message: 'Enter valid email' }
             ],
             password: [
               { type: 'required', message: 'Password is required' },
               { type: 'minlength', message: 'Password lenght must be more than 8' },
               { type: 'maxlength', message: 'Password lenght should be less than 30' },
               { type: 'pattern', message: 'enter valid password'}
             ],
             city: [
               { type: 'required', message: 'city is required' },
               { type: 'maxlength', message: 'city can not be longer than 30 characters' }
             ],
             address: [
               { type: 'required', message: 'address is required' },
               { type: 'maxlength', message: 'address can not be longer than 100 characters' }
             ],
             zip: [
               { type: 'required', message: 'zip is required' },
               { type: 'pattern', message: 'Please enter a valid zip code' }
             ],
             uploadPhoto: [
               { type: 'required', message: 'uploadPhoto is required' },
             ],
             uploadSig: [
               { type: 'required', message: 'upload Document is required' },
             ],
             uploadResume: [
               { type: 'required', message: 'upload Resume is required' },
             ],
         }

         
         fileChange(e) {
            const file = e.srcElement.files[0]; 
            this.uploadphoto = window.URL.createObjectURL(file); 
         }
         fileChangeSig(e) {
            const file = e.srcElement.files[0]; 
            this.uploadsig = window.URL.createObjectURL(file); 
         }
         fileChangeResume(e) {
            const file = e.srcElement.files[0]; 
            this.uploadresume = window.URL.createObjectURL(file); 
         }
         isSubmitted = false;
      submitForm() {
         this.isSubmitted = true;
         if (!this.slideOneForm.valid && !this.slideTwoForm.valid && !this.slideThreeForm.valid ) {
            alert('Please provide all the required values!');
            // console.log('Please provide all the required values!')
               return false;
            } else {
               console.log(this.slideOneForm.value);
               console.log(this.slideTwoForm.value);
               console.log(this.slideThreeForm.value);
            }
         }

         
           
           
}
