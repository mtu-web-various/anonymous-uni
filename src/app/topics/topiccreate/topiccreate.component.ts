import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topiccreate',
  templateUrl: './topiccreate.component.html',
  styleUrls: ['./topiccreate.component.css']
})
export class TopiccreateComponent implements OnInit {

  constructor(public topicService: TopicService, private router: Router) { }

  ngOnInit() {}

  onSaveTopic(form: NgForm){
    if(form.invalid){
      return;
    }
    this.topicService.addTopic(form.value.topicName);
    //this.router.navigate(['']);
  }

}
