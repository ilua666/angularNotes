import { Note } from './note';
import { Component } from '@angular/core';

const tagRegexp = new RegExp("(^|\\s)(#.+?)\\b","g");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mock: Note[] = [{
    text:"bbb",
    tags:[]
  },{
      text:"vvv",
      tags:[]
  }];

  notes:Note[] = this.mock;
  currNote:Note;
  oldText = "";
  filterTags:string[] = [];

  ngDoCheck() {
    if(this.currNote){
      if(this.currNote.text != this.oldText){
        this.noteParseAndSetTags(this.currNote);
        this.oldText = this.currNote.text;
      }
    }
  }

  noteParseAndSetTags(note:Note){
    const tags = this.noteParseTags(note);
    note.tags = tags;
  }

  noteParseTags(note:Note):string[]{
    const matches = note.text.match(tagRegexp);
    if (matches){
      matches.forEach((tag)=>tag.trim());
      return matches;
    }
    else
      return [];
  }


  onSelect(note:Note){
    this.currNote = note;
  }
}