import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { QrCodeApiService } from 'src/shared/services/qrCodeApi.service';

@Component({
  selector: 'app-createQrCode',
  templateUrl: './createQrCode.component.html',
  styleUrls: ['./createQrCode.component.scss']
})
export class CreateQrCodeComponent implements OnInit {
  imgQrCode: any;
  errorMessage: string | undefined;
  public form: FormGroup;
  data: string = '';
  // public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
  isDisplay: boolean = false;

  constructor(private apiService: QrCodeApiService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
    console.log('qrCodeDownloadLink: ', this.qrCodeDownloadLink);
  }

  onSubmit2() {
    // let phone = '972547872317';
    debugger;
    let phone = this.form.controls['phoneNumber'].value;
    let name = this.form.controls['name'].value;
    let phoneNumberSlice = this.checkNumber(phone);
    let textWhatsApp = `Hello ${name}, I've found your luggage! Please contact me so you can receive it back.`;
    this.data = `https://wa.me/+972${phoneNumberSlice}/?text=${encodeURIComponent(textWhatsApp)}`;
    this.isDisplay = true;
    console.table(`link data: ${this.data}`);
  }


  checkNumber(phoneNumber: any): string {
    // TODO: func for If a number contains the digit 0 remove until I find a solution for it
    let phoneNumSlice
    debugger;
    if (phoneNumber.indexOf(0) == 0) {
      phoneNumSlice = phoneNumber.slice(1, phoneNumber.length);
      console.log(`phone number after slice: ${phoneNumSlice}`);
    }
    return phoneNumSlice
  }
  // onSubmit() {
  //   debugger;
  //   let phone = this.form.controls['phoneNumber'].value;
  //   let name = this.form.controls['name'].value;
  //   this.apiService.getQrCodeFromApi(name, phone).subscribe({
  //     next: (data) => {
  //       debugger;
  //       this.imgQrCode = data;
  //       console.log('data: ', data);
  //       console.log('imgQrCode: ', this.imgQrCode);
  //     },
  //     error: (err) => {
  //       debugger;
  //       // this.errorMessage = err;
  //       console.log('error: ', err)
  //     }
  //   });

  // }

}

