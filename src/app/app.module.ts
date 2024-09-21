import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EditDialog } from './edit-dialog/edit-dialog.component';
import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

@NgModule({
  declarations: [AppComponent, PeriodicTableComponent, EditDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
