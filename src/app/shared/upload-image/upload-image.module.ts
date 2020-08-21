import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgRealEstateFilesDirective } from './directives/ng-real-estate-files.directive';


@NgModule({
  declarations: [UploadImageComponent, NgRealEstateFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
