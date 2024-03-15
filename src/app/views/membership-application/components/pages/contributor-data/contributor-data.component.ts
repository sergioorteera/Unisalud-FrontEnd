import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';
import { ActividadEconomica, AffiliationDataDetail, AreaAfiliaciones, DatosCotizante, Departamento, Dependencia, Discapacidad, EpsAnterior, Estado, Pais, Sede } from '../../../../../core/model/AffiliationData.model';

@Component({
  selector: 'app-contributor-data',
  templateUrl: './contributor-data.component.html',
  styleUrls: ['./contributor-data.component.css']
})
export class ContributorDataComponent implements OnInit {

  @Output() cambioFormulario = new EventEmitter<number>();

  epsAnterior: EpsAnterior[] = [];
  discapacidad: Discapacidad[] = [];
  departamento: Departamento[] = [];
  pais: Pais[] = [];
  //ESTE SI - FALTA EL MUNICIPIO O (ES LO MISMO QUE CIUDAD DE NACIMIENTO?)
  contributorDataForm: FormGroup;
  contributorData: DatosCotizante;


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

  onSaveContributorData(): void {
    this.contributorData = this.getContributorDataFromForm(this.contributorDataForm);
    console.log(this.contributorData);
    this.cambioFormulario.emit(3);
  }

  private getContributorDataFromForm(contributorDataForm: FormGroup): DatosCotizante {
    return new DatosCotizante(
      contributorDataForm.controls['tipoIdentificacion'].value,
      contributorDataForm.controls['numeroIdentificacion'].value,
      contributorDataForm.controls['fechaExpedicion'].value,
      contributorDataForm.controls['fechaVencimiento'].value,
      contributorDataForm.controls['primerApellido'].value,
      contributorDataForm.controls['segundoApeliido'].value,
      contributorDataForm.controls['primerNombre'].value,
      contributorDataForm.controls['SegundoNombre'].value,
      contributorDataForm.controls['fechaNacimiento'].value,
      contributorDataForm.controls['paisNacimiento'].value,
      contributorDataForm.controls['deptNacimiento'].value,
      contributorDataForm.controls['ciudadNacimiento'].value,
      contributorDataForm.controls['grupoEtnico'].value,
      contributorDataForm.controls['grupoPoblacional'].value,
      contributorDataForm.controls['sexo'].value,
      contributorDataForm.controls['orientacionSexual'].value,
      contributorDataForm.controls['estadoCivil'].value,
      contributorDataForm.controls['escolaridad'].value,
      contributorDataForm.controls['profesion'].value,
      contributorDataForm.controls['epsAnterior'].value,
      contributorDataForm.controls['regimen'].value,
      contributorDataForm.controls['tipoSangre'].value,
      contributorDataForm.controls['rh'].value,
      contributorDataForm.controls['discapacidadFisica'].value,
      contributorDataForm.controls['discapacidadVisual'].value,
      contributorDataForm.controls['discapacidadCognitiva'].value,
      contributorDataForm.controls['discapacidadAuditiva'].value,
      contributorDataForm.controls['planComplementario'].value,
      contributorDataForm.controls['deptResidencia'].value,
      contributorDataForm.controls['ciudadResidencia'].value,
      contributorDataForm.controls['direccionResidencia'].value,
      contributorDataForm.controls['barrio'].value,
      contributorDataForm.controls['zona'].value,
      contributorDataForm.controls['estrato'].value,
      contributorDataForm.controls['celular'].value,
      contributorDataForm.controls['telefono'].value,
      contributorDataForm.controls['correo'].value,
      contributorDataForm.controls['correoAlternativo'].value,
      contributorDataForm.controls['nombreEmer'].value,
      contributorDataForm.controls['direccionEmer'].value,
      contributorDataForm.controls['telefonoEmer'].value,
      contributorDataForm.controls['celularEmer'].value
    )
  }

  getAffiliationData(): void {
    this.mbsAplAffiliationDataService.getAffiliationData().subscribe((affiliationData: AffiliationDataDetail) => {
      console.log("este", affiliationData.datos);
      this.epsAnterior = affiliationData.datos.epsAnterior;
      this.discapacidad = affiliationData.datos.discapacidad;
      this.departamento = affiliationData.datos.departamento;
      this.pais = affiliationData.datos.pais;
    });
  }

  irAFormulario(numero: number) {
    this.cambioFormulario.emit(numero);
  }

}

