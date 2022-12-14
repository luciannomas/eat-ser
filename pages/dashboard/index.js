import Layout from '../../layout/Layout';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import logo from '../../public/vercel.svg';
import FolderIcon from '@mui/icons-material/Folder';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// hook
import { useRouter } from "next/router";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    marginTop: 6,
  };

export default function Home() {
    
    const router = useRouter();
  return (
    <Layout>
       
      <Stack direction="row" spacing={2}>
          <Avatar>
            <FolderIcon />
          </Avatar>
      </Stack>

        <List sx={style}  component="nav" aria-label="mailbox folders">
           
            <ListItem 
              button  
              style={{ textAlign: 'center' }}
              onClick={ ()=> { router.push("/dashboard/productos")} } 
            > 
              <ListItemText primary="PRODUCTOS" />
            </ListItem>
            <Divider /> {/* light */}

            <ListItem 
              button 
              style={{ textAlign: 'center' }}
              onClick={ ()=> { router.push("/dashboard/categorias")} } 
            > 
                <ListItemText  primary="CATEGORIA" />
            </ListItem>

        <Divider /> {/* light */}
        </List>
    
    </Layout>
 
  )
}
