import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { I18nModule } from '@app/shared/modules/i18n/i18n.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    I18nModule
  ],
  exports: [I18nModule, ReactiveFormsModule, CommonModule]
})
export class PublicSharedModule { }
