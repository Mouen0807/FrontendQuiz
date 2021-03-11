import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CategoryChoiceComponent } from './components/playGame/category-choice/category-choice.component';
import { DifficultyChoiceComponent } from './components/playGame/difficulty-choice/difficulty-choice.component';
import { GameComponent } from './components/playGame/game/game.component';
import { EndGameComponent } from './components/playGame/end-game/end-game.component';
import { DescriptionCategoryComponent } from './components/playGame/description-category/description-category.component';
import { ConfirmEmailComponent } from './components/authentification/confirm-email/confirm-email.component';
import { CreateAccountComponent } from './components/authentification/create-account/create-account.component';
import { LoginComponent } from './components/authentification/login/login.component';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
