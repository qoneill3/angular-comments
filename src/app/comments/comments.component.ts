import { Component, OnInit } from '@angular/core';
import { CommentService } from '../commentService/comment.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

	editedAuthor: string;
	editedComment: string;

	comments = [];

	constructor(private commentService: CommentService) { }

	ngOnInit() {
		this.comments = this.commentService.getComments();
	}

	addComment(author, comment) {
		this.commentService.addComment(author, comment)
	}

	deleteComment(comment) {
		this.commentService.deleteComment(comment);
	}

  editComment(comment) {
  	this.commentService.editComment(comment);
  	this.editedAuthor = comment.author;
  	this.editedComment = comment.comment;
  }

	setComment(comment, editedAuthor, editedComment) {
		this.commentService.setComment(comment, editedAuthor, editedComment);
	}

}
