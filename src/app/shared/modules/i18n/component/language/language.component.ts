import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { I18nService } from '@app/shared/modules/i18n/service/i18n.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  constructor(
    protected translateService: TranslateService,
    private i18nService: I18nService) {
    translateService.addLangs(this.i18nService.languageISOCode);
    translateService.setDefaultLang(this.i18nService.languageISOCode[0]);
    
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang?.match(/en|fr/) ? browserLang : this.i18nService.languageISOCode[0]);
  }

  onChangeISOCode(ISOCode: string) {
    this.translateService.use(ISOCode);
  }

}
