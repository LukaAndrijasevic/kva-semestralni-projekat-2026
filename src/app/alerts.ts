import Swal from "sweetalert2";

export const matCustomClass = {
    popup:          'mat-swal-popup',
    title:          'mat-swal-title',
    actions:        'mat-swal-actions',
    confirmButton:  'mat-swal-confirm',
    cancelButton:   'mat-swal-cancel'
}

export class Alerts {
    static success(text: string) {
        Swal.fire({
            title: 'Uspesno',
            text,
            icon: 'success',
            customClass: matCustomClass
        })
    }

    static error(text: string) {
        Swal.fire({
            title: 'Greska',
            text,
            icon: 'error',
            customClass: matCustomClass
        })
    }

    static async confirm(text: string, callback: Function) {
        const result = await Swal.fire({
            title: 'Da li ste sigurni?',
            text,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor:  '#d33',
            confirmButtonText:  'Da',
            cancelButtonText:   'Odustani',
            customClass: matCustomClass
        })

        if (result.isConfirmed) {
            await callback()
        }
    }
}