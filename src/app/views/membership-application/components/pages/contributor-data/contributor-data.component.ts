import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MbsAplAffiliationDataService } from '../../../services/mbs-apl-affiliation-data.service';
import { ActividadEconomica, AffiliationDataDetail, AreaAfiliaciones, DatosCotizante, Departamento, Dependencia, Discapacidad, EpsAnterior, Estado, Pais, Sede, Municipio } from '../../../../../core/model/AffiliationData.model';

@Component({
  selector: 'app-contributor-data',
  templateUrl: './contributor-data.component.html',
  styleUrls: ['./contributor-data.component.css']
})
export class ContributorDataComponent implements OnInit {

  @Output() cambioFormulario = new EventEmitter<number>();

  previusEps: EpsAnterior[] = [];
  discapacidad: Discapacidad[] = []; // FALTA CAMBIAR EL IDIOMA
  departments: Departamento[] = [];
  birthMunicipalitiesFiltered: Municipio[] = [];
  residenceMunicipalitiesFiltered: Municipio[] = [];
  countries: Pais[] = [];
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
      numeroDocumento: [null],
      fechaExpedicion: [null],
      fechaVencimiento: [null],
      primerApellido: [null],
      segundoApellido: [null],
      primerNombre: [null],
      segundoNombre: [null],
      fechaNacimiento: [null],
      idPais: [null],
      deptNacimiento: [null], //ESTE DATO NO SE ENVÍA
      idMunicipioNacimiento: [null],
      grupoEtnico: [null],
      grupoPoblacional: [null],
      sexo: [null],
      orientacionSexual: [null],
      estadoCivil: [null],
      escolaridad: [null],
      profesion: [null],
      idEpsAnterior: [null],
      regimen: [null],
      tipoSangre: [null],
      tipoRh: [null],
      discapacidadFisica: [null],
      discapacidadVisual: [null],
      discapacidadCognitiva: [null],
      discapacidadAuditiva: [null],
      deptResidencia: [null], //ESTE DATO NO SE ENVÍA
      idMunicipioUbicacion: [null],
      direccion: [null],
      barrio: [null],
      zona: [null],
      estrato: [null],
      celular: [null],
      telefono: [null],
      correoElectronico: [null],
      correoElectronicoAlternativo: [null],
      nombreContactoEmergencia: [null],
      direccionContactoEmergencia: [null],
      telefonoContactoEmergencia: [null],
      celularContactoEmergencia: [null]
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
      contributorDataForm.controls['numeroDocumento'].value,
      contributorDataForm.controls['fechaExpedicion'].value,
      contributorDataForm.controls['fechaVencimiento'].value,
      contributorDataForm.controls['primerApellido'].value,
      contributorDataForm.controls['segundoApellido'].value,
      contributorDataForm.controls['primerNombre'].value,
      contributorDataForm.controls['segundoNombre'].value,
      contributorDataForm.controls['fechaNacimiento'].value,
      contributorDataForm.controls['idPais'].value,
      contributorDataForm.controls['deptNacimiento'].value, //ESTE DATO SE USA PARA DISMINUIR LAS OPCIONES DEL SIGUIENTE INPUT
      contributorDataForm.controls['idMunicipioNacimiento'].value,
      contributorDataForm.controls['grupoEtnico'].value,
      contributorDataForm.controls['grupoPoblacional'].value,
      contributorDataForm.controls['sexo'].value,
      contributorDataForm.controls['orientacionSexual'].value,
      contributorDataForm.controls['estadoCivil'].value,
      contributorDataForm.controls['escolaridad'].value,
      contributorDataForm.controls['profesion'].value,
      contributorDataForm.controls['idEpsAnterior'].value,
      contributorDataForm.controls['regimen'].value,
      contributorDataForm.controls['tipoSangre'].value,
      contributorDataForm.controls['tipoRh'].value,
      contributorDataForm.controls['discapacidadFisica'].value,
      contributorDataForm.controls['discapacidadVisual'].value,
      contributorDataForm.controls['discapacidadCognitiva'].value,
      contributorDataForm.controls['discapacidadAuditiva'].value,
      contributorDataForm.controls['deptResidencia'].value, //ESTE DATO SE USA PARA DISMINUIR LAS OPCIONES DEL SIGUIENTE INPUT
      contributorDataForm.controls['idMunicipioUbicacion'].value,
      contributorDataForm.controls['direccion'].value,
      contributorDataForm.controls['barrio'].value,
      contributorDataForm.controls['zona'].value,
      contributorDataForm.controls['estrato'].value,
      contributorDataForm.controls['celular'].value,
      contributorDataForm.controls['telefono'].value,
      contributorDataForm.controls['correoElectronico'].value,
      contributorDataForm.controls['correoElectronicoAlternativo'].value,
      contributorDataForm.controls['nombreContactoEmergencia'].value,
      contributorDataForm.controls['direccionContactoEmergencia'].value,
      contributorDataForm.controls['telefonoContactoEmergencia'].value,
      contributorDataForm.controls['celularContactoEmergencia'].value,
    )
  }

  getAffiliationData(): void {
    this.mbsAplAffiliationDataService.getAffiliationData().subscribe((affiliationData: AffiliationDataDetail) => {
      this.previusEps = affiliationData.datos.epsAnterior;
      this.discapacidad = affiliationData.datos.discapacidad; // TOCA VER COMO SE MANEJAN
      this.departments = affiliationData.datos.departamento;
      this.countries = affiliationData.datos.pais;
    });
  }

  onBirthDepartmentChange(departmentId: number): void {
    const selectedDepartment = this.departments.find(depto => depto.id == departmentId);
    this.birthMunicipalitiesFiltered = selectedDepartment ? selectedDepartment.municipios : [];
  }

  onResidenceDepartmentChange(departmentId: number): void {
    const selectedDepartment = this.departments.find(depto => depto.id == departmentId);
    this.residenceMunicipalitiesFiltered = selectedDepartment ? selectedDepartment.municipios : [];
  }

  goToForm(code: number) {
    this.cambioFormulario.emit(code);
  }

}

