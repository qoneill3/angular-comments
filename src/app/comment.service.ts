import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommentService {

	author: string;
	comment: string;
	editable: boolean;

	 comments = [
	  {
	  	author: 'Barack Obama',
	  	comment: 'first!',
	  	editable: false
	  },
	  {
	  	author: 'Kobe Bryant',
	  	comment: 'nice work!',
	  	editable: false
	  },
	  {
	  	author: 'Everyone',
	  	comment: 'I would also like to congratulate you!',
	  	editable: false
		}
	];

  private subject: Subject<object> = new Subject<object>();


  constructor() { }

  private updateSubject(): void {
  	this.subject.next(this.comments);
  }

  getComments(): any[] {
  	return this.comments;
  }

  addComment(author, comment) {
  	this.comments.push({
  		author: author,
  		comment: comment,
  		editable: false
  	})
  }

  deleteComment(comment) {
  	let index = this.comments.indexOf(comment);
  	console.log("Deleting!", index, comment);
  	this.comments.splice(index,1);
  }

  editComment(comment) {
  	console.log("Editing!", comment);
  	comment.editable = !comment.editable;
  }

  setComment(comment, editedAuthor, editedComment) {
  	let index = this.comments.indexOf(comment);
  	console.log(index, editedAuthor, editedComment);
  	this.comments[index] = {
  		author: editedAuthor,
  		comment: editedComment,
  		editable: false
  	}
  }

  onCommentUpdated(callback): void {
  	this.subject.asObservable().subscribe(callback);
  }
}