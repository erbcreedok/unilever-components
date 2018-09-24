import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        const password = AC.get('password').value; // to get value in input tag
        const confirmPassword = AC.get('passwordC').value; // to get value in input tag
        if (password !== confirmPassword) {
            console.log('false');
            AC.get('passwordC').setErrors( {MatchPassword: true} );
        } else {
            console.log('true');
            return null;
        }
    }
}
