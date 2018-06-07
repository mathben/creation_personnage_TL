import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { TabMenuModule } from 'primeng/primeng';

import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { CharacterFrameComponent } from './character/frame/characterframe.component';
import { CharacterFormComponent } from './character/form/characterform.component';
import { LoreComponent } from './lore/lore.component';
import { ManualComponent } from './manual/manual.component';
import { DynamicSectionComponent } from './dynamicsection/dynamicsection.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        NavMenuComponent,
        CharacterFrameComponent,
        CharacterFormComponent,
        HomeComponent,
        LoreComponent,
        DynamicSectionComponent,
        ManualComponent,
        NotFoundComponent,
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'character', component: CharacterFrameComponent },
            { path: 'lore', component: LoreComponent },
            { path: 'manual', component: ManualComponent },
            { path: '**', component: NotFoundComponent}
        ]),
    ],
    providers: [
      { provide: 'BASE_URL', useValue: 'localhost:8000' }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }