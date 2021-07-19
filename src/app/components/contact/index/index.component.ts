import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService, Contact } from 'src/app/services/contact.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
    selector: 'app-contact-index',
    templateUrl: './index.component.html',
})
export class ContactIndexComponent implements OnInit {

    @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport | undefined;

    listcontact: Contact[] = [];
    listaVacia = undefined;
    public cont = 0;

    constructor(private _contactService: ContactService, public _router: Router) {
    }

    ngOnInit(): void {
        this.getData();
    }

    borrar(contact: Contact): void {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No hay vuelta atrás',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sip',
        cancelButtonText: 'Nops'
      }).then((result) => {
        if (result.value) {
          this._contactService.delete(contact).subscribe(res => this.getData());
          Swal.fire(
            'OK',
            'Producto eliminado',
            'success'
          );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Producto a salvo',
            'error'
          );
        }
      });
    }

    private getData() {
        this._contactService.getAll().subscribe(
            data => {
              this.listcontact = data;
              this.cont = data.length;
              this.listaVacia = undefined;
            },
            err => {
              this.listaVacia = err.error.message;
            }
          );
    }

    public goToEdit(id: number) {
        this._router.navigate(['/dashboard/actives/', id]);
    }
}
