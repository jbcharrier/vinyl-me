import { Component, OnInit } from '@angular/core';
import { Album } from './../album';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss']
})
export class NewAlbumComponent implements OnInit {
  album;
  albums: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.albums = db.list('/albums');
  }

  ngOnInit() {
  }

  createNewAlbum(newAlbum: NgForm){
    newAlbum.value.savingDate = new Date().getTime();
    let collection = this.albums;
    setTimeout(function(){
      let key = collection.push(newAlbum.value).key;
      newAlbum.value.id = key;
      collection.update(key, newAlbum.value);
      newAlbum.reset();
    }, 200);
    
  }
}