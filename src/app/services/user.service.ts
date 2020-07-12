import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import {Router , ActivatedRoute, Params} from '@angular/router';
import { AngularFirestoreDocument,
         AngularFirestoreCollection,
         AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import 'firebase/firestore';
import { Servicos } from '../shared/services.interface';
@Injectable()
export class UserService{

    user: User ;
    items: Observable<User>;
    canActivate = false;
    isExist: any | Observable<any |User>;
    newUser: AngularFirestoreCollection<User>;
    servicosUser: AngularFirestoreCollection<Servicos>;
    services: Servicos[];

    constructor(
        private route: Router,
        private routesActivated: ActivatedRoute,
        private ngFirestore: AngularFirestore){
    this.servicosUser = this.ngFirestore.collection('services');
    }

    getUserServices(): AngularFirestoreCollection<Servicos> | Servicos[]{
        this.servicosUser.valueChanges().subscribe(
           (data) => {this.services = data as Servicos[]
           console.log('services from firebase',data,this.services)
        
        }
        ) 
        return this.services as Servicos[];
    }

    login(): User | Observable<User>{
       let match: any | any[] | User | User[];

       if (this.user.telefone !== '' && this.user.password !== ''){

         this.isExist = this.ngFirestore.collection<User>('users').valueChanges();
         this.isExist.subscribe((data) => {
            // tslint:disable-next-line:no-unused-expression
          match =  data.find( i => i.password === this.user.password);

          if (match.telefone === this.user.telefone){
              this.route.navigate(['/home'], {queryParams: { name: match.name, telefone: match.telefone} });
              console.log('telefone ', match);
              this.user = match;
              return match;

          }
          else {
              alert('verifique seu numero  de telefone ou senha');
          }

        });

       }
       else{
           alert('Verique seu nome e senha');
       }
       this.canActivate  = true;
       return this.user;
    }

    signUp(): User{
        if (
           this.user.name !== '' && this.user.email !== ''
           && this.user.password !==  '' && this.user.location !== ''
        ){
            this.newUser = this.ngFirestore.collection('users');
            this.newUser.add(this.user);
            localStorage.setItem('userId', '32');
            console.log(localStorage.getItem('userId'));
            this.route.navigate(['/home'], {queryParams: { username: 'jesscia', telefone: this.user.telefone} });

        }
        else{
            alert('Favor,preencher todos os campos');
        }
        this.canActivate = true;
        return this.user;
    }

}
