import { Injectable } from '@angular/core';
import { AngularFirestoreDocument,
    AngularFirestoreCollection,
    AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class FireService{
    
  
    constructor(
        private ngFirestore: AngularFirestore,
        private fireService: AngularFirestoreCollection<
        {name: string, tag: string, time: string}>){
     this.fireService = this.ngFirestore.collection('services');
    }

    getService(): Observable<{name: string, tag: string, time: string}> |
     {name: string, tag: string, time: string}| any{
        return this.ngFirestore;
    }
}