import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    PrincipalPageComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PrincipalPageComponent,
    SidebarComponent,
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
