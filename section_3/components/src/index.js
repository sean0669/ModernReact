import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author ={faker.name.firstName()} 
                timeAgo="Today at 4:45PM" 
                avatar={faker.image.avatar()} 
                text={faker.lorem.words()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author ={faker.name.firstName()} timeAgo="Today at 14:25PM" avatar={faker.image.avatar()} text={faker.lorem.words()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author ={faker.name.firstName()} timeAgo="Today at 18:19PM" avatar={faker.image.avatar()} text={faker.lorem.words()}/>
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));

