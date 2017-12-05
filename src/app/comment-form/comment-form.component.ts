import { Component, OnInit } from '@angular/core';
import { CommentService } from '../commentService/comment.service'

@Component({
  selector: 'app-comments-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentsFormComponent implements OnInit {

	constructor(private commentService: CommentService) { }

	ngOnInit() {
	}

	addComment(author, comment) {
		this.commentService.addComment(author, comment)
	}

}