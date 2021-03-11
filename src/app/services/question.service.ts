import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  selectedFile: any;
  message: any;
  imageName: any; /*'2048test.png';*/


  constructor(private httpClient: HttpClient) { }
  public onFileChanged(event: any): void{
    this.selectedFile = event.target.files[0];

  }

  public onUploadImage(): void {

    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }

  public getImageById(id: number): Observable<any>{
    return this.httpClient.get('http://localhost:9090/ImageModel/id/' + id);
  }

  public getImageByName(name: string): Observable<any>{
    return this.httpClient.get('http://localhost:9090/ImageModel/name/' + name);
  }

}
