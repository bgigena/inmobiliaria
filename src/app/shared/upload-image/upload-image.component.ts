import { Component } from '@angular/core';
import { FileItem } from '@shared/upload-image/models/file-item';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [StorageService]
})
export class UploadImageComponent {

  files:FileItem[]=[];
  isOverDrop = false;

  constructor( private readonly storageSvc:StorageService) { }

  onUpload(): void{
    this.storageSvc.uploadImage(this.files);

  }

}
