import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-upload-images',
  templateUrl: './admin-upload-images.component.html',
  styleUrls: ['./admin-upload-images.component.css']
})
export class AdminUploadImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public dropZoneTemplate = `<div class="centering center-dropzone">I'm dropzone</div>`;

  fileUploaded(success, response, file){
    success && console.log("uploaded - awesome", response, file);
    success || console.log("not uploaded - very bad", response, file);
  }

  filesUpdated(files) {
    console.log("Store state updated! Current state: ", files)
  }

  beforeRequest(xhr){
    xhr.setRequestHeader("Hello","World");
  }


  beforeFileUpload(formData){
    return formData;
  }

  beforeAddFile(file){
    return true;
  }

}
