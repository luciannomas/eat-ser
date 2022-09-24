import axios from "axios";
import Layout from '../../../layout/Layout';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// hook
import { useRouter } from "next/router";

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    marginTop: '80px',
  };

export default function Home({categoria}) {

  const router = useRouter();

  const handleClick = async (cat) => {

    try {
      const res = await axios.delete("/api/categorias/" + cat._id);
  
    if (res.status === 204) {
      router.push("/dashboard/categorias");
    } 
    router.push("/dashboard/categorias");

    } catch (error) {
      console.log("msg:", error)
    }
  }
    
  return (
    <Layout>
        <Typography variant="h4" sx={{ marginTop: '-100px', textAlign: 'center' }}>
          Categorias
        </Typography>
        
        <List sx={style}  component="nav" aria-label="mailbox folders">
           {
            categoria.map((cat) => (
             <> 
              <ListItem button key = {cat.id}> 
                  <ListItemText primary={cat.title} />
                  <Stack direction="row" spacing={1}>
                    {/* <Chip label="primary" color="primary" variant="outlined" /> */}
                    <Chip 
                      label="eliminar" 
                      color="success" 
                      variant="outlined"
                      onClick={ ()=> { handleClick(cat) }} 
                      
                      />
                   </Stack>
              </ListItem>
              <Divider /> {/* light */}
            </>
            ))
           }
        </List>
        <Button 
          style = {{ background:'radial-gradient(orange, transparent)', marginTop: '25px' ,marginLeft: '12px', width: '90%', height: '55px', fontSize: "15px"}}
          variant="contained" size="large"
        >
            Agregar
        </Button> 
    </Layout>
 
  )
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/categorias");
    
    if (res.status === 200) {
      const categoria = await res.json();
      return {
        props: {
          categoria,
        },
      };
    }
  
    return {
      props: {
        error: {
          statusCode: res.status,
          statusText: "not table",
        },
      },
    };
  }
