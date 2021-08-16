import { Injectable, NgZone } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { 
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  async SignIn(email, password) {
    return await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.ngZone.run(() => {
        this.router.navigate(['/dashboard']);
      })
    }).catch(console.log)
  }

  async SendVerificationMail() {
    return await this.afAuth.currentUser.then(u => u.sendEmailVerification()).then(() => {
      this.router.navigate(['verify-email-address'])
    })
  }

  async ForgotPassword(passwordResetEmail){
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset sent')
    }).catch(e => {
      window.alert(e)
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  async AuthLogin(provider) {
    return await this.afAuth.signInWithPopup(provider)
    .then(res => {
      this.ngZone.run(() => {
        this.router.navigate([''])
      })
      this.SetUserData(res.user)
    }).catch(e => {
      window.alert(e)
    })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  SignOut() {
    return this.afAuth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/'])
    })
  }
}
