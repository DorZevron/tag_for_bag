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
  data: string = 'sssssssssssssssssssssssssssss';
  // public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
  isDisplay: boolean = false;

  constructor(private apiService: QrCodeApiService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   phoneNumber: new FormControl('')
    // })

    // this.form = this.formBuilder.group({
    //   name: '',
    //   phoneNumber: ''
    // })
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

