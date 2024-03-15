import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto-soporte',
  standalone: true,
  templateUrl: './contacto-soporte.component.html',
  styleUrl: './contacto-soporte.component.scss',
  imports: [FormsModule, ReactiveFormsModule],
})
export class ContactoSoporteComponent {
  private fb = inject(FormBuilder);
  private contactoService = inject(ContactoService);

  public formulario = this.fb.group({
    nombreCompleto: this.fb.control('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
    nombreEmpresa: this.fb.control('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
    correo: this.fb.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100)
    ]),
    telefono: this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^[0-9]*$')
    ]),
    mensaje: this.fb.control('', [
      Validators.required,
      Validators.maxLength(200)
    ]),
    categoria: this.fb.control('', [
      Validators.required
    ])
  });

  public guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { nombreCompleto } = this.formulario.value as { nombreCompleto: string };
    const { nombreEmpresa } = this.formulario.value as { nombreEmpresa: string };
    const { correo } = this.formulario.value as { correo: string };
    const { telefono } = this.formulario.value as { telefono: string };
    const { mensaje } = this.formulario.value as { mensaje: string };
    const { categoria } = this.formulario.value as { categoria: string };

    this.contactoService.enviarContacto({
      nombreCompleto,
      nombreEmpresa,
      correo,
      telefono,
      mensaje,
      categoria
    }).subscribe({
      next: () => {
        console.log('Guardado');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error: (err) => {
        console.error('Error al enviar el formulario:', err);
        // Aquí puedes agregar manejo de errores si es necesario
      }
    });
  }
}
