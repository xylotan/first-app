import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

 export function customValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors|null =>{
const value=control.value;
if(!value)
{
    return null;
}
if (value != null && (value < 5000 || value > 10000)) {
    return { salaryRange: true };  // Error key
  }
else
return null;

  }
}




export function createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}