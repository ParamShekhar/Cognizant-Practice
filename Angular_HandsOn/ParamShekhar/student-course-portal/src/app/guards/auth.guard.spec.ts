import { TestBed } from '@angular/core/testing';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { provideRouter } from '@angular/router';

describe('authGuard', () => {
  it('should be defined', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    expect(authGuard).toBeTruthy();
  });
});
