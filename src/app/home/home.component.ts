import { Component, OnInit } from '@angular/core';
import { Album } from './../album';
import { AlbumService } from './../album.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AlbumService]
})

export class HomeComponent implements OnInit {
  album;
  albums;
  selectedAlbum: Album;
  collection;

  constructor(private albumService: AlbumService, private db: AngularFireDatabase) {
      this.albums = db.list('/albums').valueChanges();
      this.collection = db.list('/albums');
  }

  ngOnInit(): void {
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

  deleteAlbum(albumToDelete){
    this.collection.remove(albumToDelete.id);
  }
}