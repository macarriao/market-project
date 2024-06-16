import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }