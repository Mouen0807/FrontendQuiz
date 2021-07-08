import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CategoryChoiceComponent } from './components/playGame/category-choice/category-choice.component';
import { DifficultyChoiceComponent } from './components/playGame/difficulty-choice/difficulty-choice.component';
import { GameComponent } from './components/playGame/game/game.component';
import { EndGameComponent } from './components/playGame/end-game/end-game.component';
import { DescriptionCategoryComponent } from './components/playGame/description-category/description-category.component';
import { ConfirmEmailComponent } from './components/authentication/confirm-email/confirm-email.component';
import { CreateAccountComponent } from './components/authentication/create-account/create-account.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AddPasswordComponent } from './components/authentication/add-password/add-password.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent,
    ConfigurationComponent,
    CategoryChoiceComponent,
    DifficultyChoiceComponent,
    GameComponent,
    EndGameComponent,
    DescriptionCategoryComponent,
    ConfirmEmailComponent,
    CreateAccountComponent,
    LoginComponent,
    AddPasswordComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
