import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {QuestionService} from './services/question.service';
import {ImageModel} from './model/image-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FRONTEND-QUIZ';
  retrievedImage: any;
  selectedFile: any;
  base64Data: any;
  retrieveResponse: any;
  message: any;
  imageName: any; /*'2048test.png';*/

  constructor(private httpClient: HttpClient, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getImageById(1).subscribe(res =>
    {
      this.retrieveResponse = res;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      console.log(this.retrievedImage);
    });
  }

}
