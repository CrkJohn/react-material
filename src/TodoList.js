import React from 'react';
import { Todo } from './Todo'


import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listTodo = this.props.tdList.map((td) =>
            <div>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Todo text={td.text} priority={td.priority} dueDate={td.dueDate} />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br></br>
            </div>
           
        );
        return (
            <ul>{listTodo}</ul>
          
        );
    }


}