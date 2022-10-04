import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { I18nModule } from '@app/shared/modules/i18n/i18n.module';
import { CapsLockDirective } from '@app/shared/directives';

@NgModule({
  declarations: [CapsLockDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    I18nModule
  ],
  exports: [I18nModule, ReactiveFormsModule, CommonModule, CapsLockDirective]
})
export class PublicSharedModule { }
