import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';
import { ActividadEconomica, AffiliationDataDetail, Departamento, Dependencia, Discapacidad, EpsAnterior, Estado, Pais, Sede } from '../../../../../core/model/AffiliationData.model';

@Component({
  selector: 'app-contributor-data',
  templateUrl: './contributor-data.component.html',
  styleUrls: ['./contributor-data.component.css']
})
export class ContributorDataComponent implements OnInit {

  @Output() cambioFormulario = new EventEmitter<number>();
  estado: Estado[] = [];
  actividadEconomica: ActividadEconomica[] = [];
  sede: Sede[] = [];
  epsAnterior: EpsAnterior[] = [];
  discapacidad: Discapacidad[] = [];
  departamento: Departamento[]= [];
  dependencia: Dependencia[]= [];
  pais: Pais[]= [];
  contributorDataForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mbsAplAffiliationDataService: MbsAplAffiliationDataService,
  ) { }


  ngOnInit(): void {
    this.contributorDataForm = this.initForm();
    this.getAffiliationData();
  }

  initForm(): FormGroup {
    return (this.contributorDataForm = this.formBuilder.group({
      tipoIdentificacion: [null],
      numeroIdentificacion: [null],
      fechaExpedicion: [null],
      fechaVencimiento: [null],
      primerApellido: [null],
      segundoApeliido: [null],
      primerNombre: [null],
      SegundoNombre: [null],
      fechaNacimiento: [null],
      paisNacimiento: [null],
      deptNacimiento: [null],
      ciudadNacimiento: [null],
      grupoEtnico: [null],
      grupoPoblacional: [null],
      sexo: [null],
      orientacionSexual: [null],
      estadoCivil: [null],
      escolaridad: [null],
      profesion: [null],
      epsAnterior: [null],
      regimen: [null],
      tipoSangre: [null],
      rh: [null],
      discapacidadFisica: [null],
      discapacidadVisual: [null],
      discapacidadCognitiva: [null],
      discapacidadAuditiva: [null],
      planComplementario: [null],
      deptResidencia: [null],
      ciudadResidencia: [null],
      direccionResidencia: [null],
      barrio: [null],
      zona: [null],
      estrato: [null],
      celular: [null],
      telefono: [null],
      correo: [null],
      correoAlternativo: [null],
      nombreEmer: [null],
      direccionEmer: [null],
      telefonoEmer: [null],
      celularEmer: [null],
    }));
  }

  onSaveMembershipAreaData(): void {

  }

  getAffiliationData():void{
    this.mbsAplAffiliationDataService.getAffiliationData().subscribe((affiliationData: AffiliationDataDetail) => {
      console.log("este",affiliationData.datos);

      // this.estado = affiliationData.estado;
      // this.actividadEconomica = affiliationData.actividadEconomica;
      // this.sede = affiliationData.sede;
      this.epsAnterior = affiliationData.datos.epsAnterior;
      // this.discapacidad = affiliationData.discapacidad;
      // this.departamento = affiliationData.departamento;
      // this.dependencia = affiliationData.dependencia;
      // this.pais = affiliationData.pais;

    });
  }

  irAFormulario(numero: number) {
    this.cambioFormulario.emit(numero);
  }

}

