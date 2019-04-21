import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Topic } from '../../_models/topic.model';

@Component({
  selector: 'app-topiccreate',
  templateUrl: './topiccreate.component.html',
  styleUrls: ['./topiccreate.component.css']
})
export class TopiccreateComponent implements OnInit {
  form: FormGroup;
  topic: Topic;

  constructor() { }

  ngOnInit() {
  }

  onSaveTopic(){
    if(this.form.invalid){
      return;
    }
  }

}
