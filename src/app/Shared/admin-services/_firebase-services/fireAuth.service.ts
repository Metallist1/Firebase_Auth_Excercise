import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from "rxjs";
import { switchMap } from 'rxjs/operators';

import { FUser } from '../../models/firebaseUser';

@Injectable({
  providedIn: 'root'
})
export class FAuthenticationService {
  user$: Observable<FUser>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<FUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }
    async googleSignin(){
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.updateUserData(credential.user);

      return  this.router.navigate(['/admin-main/']);
    }

    async signOut() {
      await this.afAuth.auth.signOut();
      return this.router.navigate(['/']);
    }

    private updateUserData({ uid, email, displayName}: FUser) {

    const userRef: AngularFirestoreDocument<FUser> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName
    };

    return userRef.set(data, { merge:true });
    }


}
