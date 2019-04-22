import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Topic } from '../_models/topic.model';

@Injectable({providedIn: 'root'})
export class TopicService {
    private topics: Topic[] = [];
    private topicsUpdated = new Subject<Topic[]>();

    getTopics() {
        return [...this.topics];
    }

    getTopicUpdateListener(){
        return this.topicsUpdated.asObservable();
    }

    addTopic(name: string){
        const topic: Topic = { topicName: name };
        this.topics.push(topic);
        this.topicsUpdated.next([...this.topics]); 
    }
}