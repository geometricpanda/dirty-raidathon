import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {CanActivate} from '@angular/router';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import type {Response} from 'express';

@Injectable({
  providedIn: 'root',
})
export class CacheHeadersGuard implements CanActivate {

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Optional() @Inject(RESPONSE) private response: Response,
  ) {
  }

  canActivate(): boolean {
    if (isPlatformServer(this.platformId)) {
      this.response.setHeader('cache-control', 'public, max-age=300');
    }
    return true;
  }

}
