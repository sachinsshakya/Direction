import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { BiologyComponent } from './biology/biology.component';
import { AdvanceScienceComponent } from './advance-science/advance-science.component';
import { LawsphysicsComponent } from './lawsphysics/lawsphysics.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddElementComponent } from './advance-science/add-element/add-element.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LogoutDialogComponent } from './home-layout/logout-dialog/logout-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { DeleteElementComponent } from './advance-science/delete-element/delete-element.component';
import { UpdateElementComponent } from './advance-science/update-element/update-element.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { TokenIntercepterService } from './token-intercepter.service';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ContactComponent } from './contact/contact.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    routingComponent,
    HomeComponent,
    LoginComponent,
    MathematicsComponent,
    PhysicsComponent,
    ChemistryComponent,
    BiologyComponent,
    AdvanceScienceComponent,
    LawsphysicsComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    AddElementComponent,
    LogoutDialogComponent,
    DeleteElementComponent,
    UpdateElementComponent,
    ProfileComponent,
    EditProfileComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule, 
    MatDividerModule,
    MatToolbarModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi: true 
  }],
  entryComponents:[AddElementComponent,LogoutDialogComponent,DeleteElementComponent,UpdateElementComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
