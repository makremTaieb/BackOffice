import { Observable } from 'rxjs';
import { IUser } from './../shared/models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }



  getProducts(){



    // let params = new HttpParams();
    // if (shopParams.brandId !== 0) {
    //   params = params.append('brandId', shopParams.brandId.toString());
    // }
    // if (shopParams.typeId !== 0) {
    //   params = params.append('typeId', shopParams.typeId.toString());
    // }
    // if (shopParams.search) {
    //   params = params.append('search', shopParams.search.toString());
    // }



    // params = params.append('sort', shopParams.sort)
    // params = params.append('pageIndex', shopParams.pageNumber.toString())
    // params = params.append('pageSize', shopParams.pageSize.toString())
    // return this.http.get<IPagination | any>(this.baseUrl + 'products', { observe: 'response', params })
    //   .pipe(
    //     // delay(1000),
    //     map(response => {
    //       return response.body;
    //     })
    //   )


    // Static Method 

    return [
      {
        "businessPhones": [],
        "displayName": "Amin Elloumi",
        "givenName": "Amin",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Elloumi",
        "userPrincipalName": "00239375-67c6-4d6e-95ab-d91d92538330@stbclientb2c.onmicrosoft.com",
        "id": "00239375-67c6-4d6e-95ab-d91d92538330"
      },
      {
        "businessPhones": [],
        "displayName": "MS Solution",
        "givenName": "Amine",
        "jobTitle": "DSI",
        "mail": "amine.laroussi@mssolutions-group.com",
        "mobilePhone": "29695484",
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Laroussi",
        "userPrincipalName": "MSS_ALaroussi@stbclientb2c.onmicrosoft.com",
        "id": "010c023c-cfeb-4843-8969-02ef9e515e38"
      },
      {
        "businessPhones": [],
        "displayName": "Ali_Go_Digital",
        "givenName": "Ali",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Bouchrara",
        "userPrincipalName": "0ae39e5d-8f4d-4875-bc27-dd917ad06979@stbclientb2c.onmicrosoft.com",
        "id": "0ae39e5d-8f4d-4875-bc27-dd917ad06979"
      },
      {
        "businessPhones": [],
        "displayName": "Hatem GHAZALA",
        "givenName": "Hatem",
        "jobTitle": null,
        "mail": "hatem.ghazala@stb.com.tn",
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Ghazala",
        "userPrincipalName": "hatem.ghazala_stb.com.tn#EXT#@stbclientb2c.onmicrosoft.com",
        "id": "1bad3bd2-5d7f-43c4-8177-b938e026348c"
      },
      {
        "businessPhones": [],
        "displayName": "SOMEF",
        "givenName": "SOMEF",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "SOMEF",
        "userPrincipalName": "2b6f166a-3efb-4bc3-bdb7-2977b7a1c3bc@stbclientb2c.onmicrosoft.com",
        "id": "2b6f166a-3efb-4bc3-bdb7-2977b7a1c3bc"
      },
      {
        "businessPhones": [],
        "displayName": "Slim Gharbi",
        "givenName": "Slim",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Gharbi",
        "userPrincipalName": "323e0221-8ccb-4c78-b315-f4ec0c85a52b@stbclientb2c.onmicrosoft.com",
        "id": "323e0221-8ccb-4c78-b315-f4ec0c85a52b"
      },
      {
        "businessPhones": [],
        "displayName": "DF_AGRIMED",
        "givenName": "DF_AGRIMED",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "DF_AGRIMED",
        "userPrincipalName": "35dd6901-e0e4-4a1d-8adb-407e42a4cf71@stbclientb2c.onmicrosoft.com",
        "id": "35dd6901-e0e4-4a1d-8adb-407e42a4cf71"
      },
      {
        "businessPhones": [],
        "displayName": "VoiceBot",
        "givenName": "SVC",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "VoiceBot",
        "userPrincipalName": "3653be37-13de-458d-953c-726cbeeb75af@stbclientb2c.onmicrosoft.com",
        "id": "3653be37-13de-458d-953c-726cbeeb75af"
      },
      {
        "businessPhones": [],
        "displayName": "ACIDLABS",
        "givenName": "ACIDLABS",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "ACIDLABS",
        "userPrincipalName": "3655391f-4861-48d9-8d3f-2d350362c7d6@stbclientb2c.onmicrosoft.com",
        "id": "3655391f-4861-48d9-8d3f-2d350362c7d6"
      },
      {
        "businessPhones": [],
        "displayName": "Faycel Kahloun",
        "givenName": "Faycel",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Kahloun",
        "userPrincipalName": "39f79b8f-7911-41e7-b852-cba64521f482@stbclientb2c.onmicrosoft.com",
        "id": "39f79b8f-7911-41e7-b852-cba64521f482"
      },
      {
        "businessPhones": [],
        "displayName": "ali-GroupeMMS",
        "givenName": "MMS",
        "jobTitle": "GroupeMMS",
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "MMS",
        "userPrincipalName": "3c85a421-feef-4043-a283-d7b4adfbdb3c@stbclientb2c.onmicrosoft.com",
        "id": "3c85a421-feef-4043-a283-d7b4adfbdb3c"
      },
      {
        "businessPhones": [],
        "displayName": "CPG BUDGET",
        "givenName": "abderrazak",
        "jobTitle": "DSI",
        "mail": "abderrazak.souilah@cpg.com.tn",
        "mobilePhone": "98589110",
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "souilah",
        "userPrincipalName": "CPG_BUDGET@stbclientb2c.onmicrosoft.com",
        "id": "3df6c02b-3de8-4b4c-896a-944540f1055f"
      },
      {
        "businessPhones": [],
        "displayName": "SOMOCER",
        "givenName": "SOMOCER",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "SOMOCER",
        "userPrincipalName": "49a9b53d-6c2f-46a7-a9ed-32f703df8049@stbclientb2c.onmicrosoft.com",
        "id": "49a9b53d-6c2f-46a7-a9ed-32f703df8049"
      },
      {
        "businessPhones": [],
        "displayName": "Foued Khouaja",
        "givenName": "Foued",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "Khouaja",
        "userPrincipalName": "4c20b5a7-4c73-4e2c-bebf-4e7c81e59cb8@stbclientb2c.onmicrosoft.com",
        "id": "4c20b5a7-4c73-4e2c-bebf-4e7c81e59cb8"
      },
      {
        "businessPhones": [],
        "displayName": "Faycel KAHLOUN",
        "givenName": "Faycel",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "KAHLOUN",
        "userPrincipalName": "4caa18de-d2d2-45be-b9de-8620aa74e718@stbclientb2c.onmicrosoft.com",
        "id": "4caa18de-d2d2-45be-b9de-8620aa74e718"
      },
      {
        "businessPhones": [],
        "displayName": "DINARO",
        "givenName": "DINARO",
        "jobTitle": null,
        "mail": null,
        "mobilePhone": null,
        "officeLocation": null,
        "preferredLanguage": null,
        "surname": "DINARO",
        "userPrincipalName": "4f152293-cd23-4045-8e42-14266cc62300@stbclientb2c.onmicrosoft.com",
        "id": "4f152293-cd23-4045-8e42-14266cc62300"
      }
    ]
    
  } 

  getUser(id: number) {
    // return this.http.get<IUser>(this.baseUrl + 'user/' + id)
    return {
      "businessPhones": [],
      "displayName": "Kahloun Faicel",
      "givenName": "Faycel",
      "jobTitle": "DSI",
      "mail": "fcl@gmail.com",
      "mobilePhone": "98589110",
      "officeLocation": null,
      "preferredLanguage": null,
      "surname": "Kahloun",
      "userPrincipalName": "FclKahloun@stbclientb2c.onmicrosoft.com",
      "id": "90ddcbdd-8d85-42c5-bc34-fc92f50d99d1"
    }
  }

}
