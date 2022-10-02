import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrCodeApiService {
  constructor(private _http: HttpClient) { }


  getQrCodeFromApi(name: any, phoneNum: any) {
    debugger
    // let headers = {
    //   'content-type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    // };
    let textWhatsApp = `Hello ${name}!, I've found your luggage! Please contact me so you can take It back!`
    let whatsAppUrl = `https://wa.me/${phoneNum}?text=${textWhatsApp}`;

    // const body = {
    //   "frame_name": "bottom-frame",
    //   "qr_code_text": `${whatsAppUrl}`,
    //   "image_format": "SVG",
    //   "qr_code_logo": "scan-me-square",
    //   "frame_color": "#02bfff",
    //   "frame_text_color": "#ffffff",
    //   "frame_icon_name": "mobile",
    //   "frame_text": "Scan me",
    //   "marker_left_template": "version13",
    //   "marker_right_template": "version13",
    //   "marker_bottom_template": "version13"
    // };
    const body = {
      "frame_name": "bottom-frame",
      "qr_code_text": "https://hyperlinkwebapp.co.il",
      "image_format": "SVG",
      "frame_color": "#02bfff",
      "frame_text_color": "#ffffff",
      "frame_icon_name": "mobile",
      "frame_text": "Scan me",
      "marker_left_template": "version13",
      "marker_right_template": "version13",
      "marker_bottom_template": "version13"
    }
    // return this._http.post<any>(`${environment.QrCodeUrl}${environment.QrCodeApiKey}`, body);
    return this._http.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hyperlinkwebapp.co.il/');

    // 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hyperlinkwebapp.co.il/'
  }
}
