import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AuthorizationGuard } from './authorization-guard.service';
import { AuthorizationService } from './authorization.service';
import { UserResolveService } from './user-resolve.service';

@NgModule({
    providers: [
        UserResolveService,
        AuthorizationService,
        AuthorizationGuard,
        Cookie,
    ]
})
export class CoreModule {
    public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core module is already loaded. Import it in the AppModule only');
        }
    }
}