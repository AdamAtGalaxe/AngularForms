import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class UsernameValidators{

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
        return {cannotContainSpace: true};

        else return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject)=>
        {
            setTimeout(()=> {
                console.log('ok');
                if(control.value === "Adam")
                    resolve({shouldBeUnique: true});
                else 
                    resolve(null);
            }, 2000);


        });




    }
}