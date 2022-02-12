import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';

const Item = ({ name, details }) => {
    return(
        <ListItem>
          <div styles={{textAlign: "left"}}>
            <ListItemText
                primary={name}
                secondary={details}
            />
          </div>
        </ListItem>
    )
}

export default Item;
