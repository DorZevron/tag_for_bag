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
  phoneNumWithPrefix: string = '';

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
    let textWhatsApp = `Hello ${name}, I've found your luggage! Please contact me so you can receive it back.`;
    this.data = `https://wa.me/${phone}/?text=${encodeURIComponent(textWhatsApp)}`;
    this.isDisplay = true;
    console.table(`link data: ${this.data}`);
  }

  // NPM Install ng2-tel-input
  // Repository : github.com/gauravsoni119/ng2-tel-input
  // getNumber(number: any) {
  //   this.phoneNumWithPrefix = number;
  //   console.log(`number phone: ${this.phoneNumWithPrefix}`);
  // }
  // telInputObject(number: any) {
  //   let phoneNum = number;
  //   console.log(`telInputObject: ${phoneNum}`);
  // }

  // onCountryChange(number: any) {
  //   let phoneNum = JSON.stringify(number);
  //   console.log(`onCountryChange: ${phoneNum}`);
  // }
}

