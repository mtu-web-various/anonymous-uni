import { Component, OnInit, OnDestroy } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from 'src/app/_models/topic.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  topics: Topic[] = [];
  private topicSubs: Subscription;

  constructor(public topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
    this.topicSubs = this.topicService.getTopicUpdateListener()
      .subscribe((topics: Topic[])=>{
        this.topics = topics;
      });
  }

  ngOnDestroy(){
    this.topicSubs.unsubscribe();
  }

}
