import React from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
export default class Drawer extends React.Component {
    constructor() {
        super()

        // const[open,setOpen]=usestate(false)


    }



    render() {
        return <div className="drawer">
              {/* <Drawer anchor="right" open={open} onClose={()=>setOpen(false)} >      anchor is for whicher side of the screen you want to show the drawer */}
            <Drawer open={true} >

                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText></ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>


            <IconButton>
                <MenuRoundedIcon />
            </IconButton>





        </div>
    }
}