import { AbstractControl, Validator } from '@angular/forms';

//forbiddenEmail.validator.ts
interface ValidationResponse {
  [key: string]: any | null;

}
export function forbiddenEmail(control: AbstractControl): ValidationResponse {
  const forbiddenEmails = ['aa@aa.pl', 'jan@kos.pl'];

  const status = forbiddenEmails.includes(control.value);
  return status
    ? { forbiddenEmail: true }
    : null;

  return {
    forbiddenEmail: true
  };
}
