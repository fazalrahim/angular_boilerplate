import { NgModule } from '@angular/core';

import { NavRoutingModule } from '@app/nav/nav-routing.module';
import { NavComponent } from '@app/nav/component/nav.component';
import { PublicSharedModule } from '@app/shared/public-modules/public-shared.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    NavRoutingModule,
    PublicSharedModule
  ],
  exports:[NavComponent]
})
export class NavModule { }
