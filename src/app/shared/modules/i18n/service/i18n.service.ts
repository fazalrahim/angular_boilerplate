import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class I18nService implements TranslateLoader {

    private readonly languageUrl = './assets/i18n/';
    public readonly languageISOCode = ['en', 'fr'];
    constructor(private httpBackend: HttpBackend) { }

    getTranslation(langCode: string): Observable<any> {
        const httpClient = new HttpClient(this.httpBackend);
        return httpClient.get(`${this.languageUrl}${langCode}.josn`);
    }
}
